import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state= {
            search:'',
            postList:[],
            userPosts: true
        }
    }
    componentDidMount(){
        if(!this.props.user.username){
            this.props.history.push('/')
        }
            this.getPosts()
    }
    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleToggle = () => {
        this.setState({ myPosts: !this.state.myPosts})
    }
    getPosts = () =>{
        axios.get(`/api/posts`)
        .then(res => this.setState({postList: res.data}))
        .catch(err => console.log(err));
    }
    render(){
       console.log(this.props)
       const mappedPosts = this.state.postList.map((post,i) => (
           <div key={i} className='post-box'>
               
                <h1>{post.title}</h1>
               <p>{post.content}</p>
               <img  src={post.img} alt='Helo Post' className='post-image'/>
                <p>{post.username}</p>
               
           </div>
       ))
        return(
            <div className='Dash-area'>
                <div>
                    <input
                    value={this.state.search}
                    name='search'
                    placeholder='search by title'
                    onChange={(e)=>this.handleInput(e)}
                    />
                    
                    <button>search</button>
                    <button>reset</button>
                    <input type='checkbox' id='My Posts' name='My Posts' onChange={this.handleToggle} />
                    <label>My Posts</label>
                    {mappedPosts}
                </div>
                <div>


                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default  connect(mapStateToProps)(Dashboard);