import React, {Component}  from 'react';


class Product extends Component{
    constructor(props){
        super(props)
        this.state={
           editView: false 
        }
    }
    toggleEdit = ()=>{
        this.setState({editView: !this.state.editView})
    }
    
    render(){   
        return(
            <div >
                
                <h1>{this.props.itemName}</h1>
                <h2>{this.props.itemPrice}</h2>
                <img className='imgUrl'
                src={this.props.itemImgUrl} 
                alt={this.props.itemName}/>
                <button onClick={this.props.deleteFn}>Delete</button>
                <button>edit</button>
                

            </div>
        )
    } 
    
}
export default Product;