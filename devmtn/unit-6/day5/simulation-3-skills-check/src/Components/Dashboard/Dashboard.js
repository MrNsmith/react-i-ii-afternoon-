import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import './Dashboard.css'


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state= {
            postList:[],
            userPosts: [],
            showPosts: true
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.showPosts !== this.state.showPosts){
            this.getPosts()
        }
    }
    componentDidMount(){
       
            this.getPosts()
    }
   
    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    // handleToggle = () => {
    //     this.setState({ showPosts: !this.state.showPosts})
    // }
    

    checkBox = () =>{
        const {postList, showPosts} = this.state;
        let newPost=[];
        if(showPosts){
            newPost = postList.filter((post, index)=>{
             
                return post.user_id === this.props.user['user_id']
            })
           console.log(showPosts)
            this.setState({
                showPosts: !showPosts, userPosts: newPost
                
            })
            
        }
    }
    getPosts = () =>{
        axios.get(`/api/posts`)
        .then(res => this.setState({postList: res.data}))
        .catch(err => console.log(err));
    }
    handleDelete=(id)=>{
        axios.delete(`/api/posts/${id}`)
        .then(() => this.getPosts())
        .catch(err=> console.log(err))

        
    }
    render(){
       console.log(this.props.user['user_id'])
       const mappedUserPosts = this.state.userPosts.map((post,i) =>(
           <div key ={i}>
              <h1>{post.title}</h1>
               <p>{post.content}</p>
               <img  src={post.img} alt='Helo Post' className='post-image'/>
                <p>{post.username}</p>
                
           </div>
       ))
       console.log(mappedUserPosts)
       const mappedPosts = this.state.postList.map((post,i) => (
           <div key={i} className='post-box'>
               
                <h1>{post.title}</h1>
               <p>{post.content}</p>
               <img  src={post.img} alt='Helo Post' className='post-image'/>
                <p>{post.username}</p>
                <button
                onClick={this.handleDelete(post.post_id)}
                >Delete</button>
               
           </div>

       ))
       console.log(this.state.)
        return(
            <div className='Dash-area'>
               
                
                {/* {post_id, title, img, content, author_id}) */}
                <div>
                    
                    <input 
                    type='checkbox' 
                    name='showPosts' 
                    id='checkbox' 
                    onChange={this.checkBox} 
                    checked={this.state.showPosts}
                    />
                    <label>My Posts</label>
                   
                    {this.state.showPosts?mappedPosts:mappedUserPosts}

                </div>
                <div>


                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default  connect(mapStateToProps)(Dashboard);