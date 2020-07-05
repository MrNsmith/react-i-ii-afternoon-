import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgUrl: ''
        }
        this.handleReset = this.handleReset.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePriceInput= this.handlePriceInput.bind(this);
        this.handleImgUrl = this.handleImgUrl.bind(this);
    }
    handleNameInput(val){
        this.setState({name: val})
       
    }
    handlePriceInput (val){
        this.setState({price: val})
        
    }
    handleImgUrl (val) {
        this.setState({imgUrl: val})
        
    }
    handleReset(){
        this.setState({name:'',price: 0, imgUrl:''} )
    }
    
    render(){
        return(
            <div>
                <form>
                <input 
                onChange={(e)=>this.handleNameInput(e.target.value)}
                placeholder="Name"/>
                <input 
                onChange={(e)=>this.handlePriceInput(e.target.value)} 
                placeholder='Price'/>
                <input 
                  onChange={(e)=>this.handleImgUrl(e.target.value)}
                placeholder='Image Url'/>
                <button onClick={this.handleReset}>Cancel</button>
                <button>Add to Inventory</button>
                </form>
        <h1>{this.state.price}</h1>
            </div>
            
        )
    }
}
export default Form;