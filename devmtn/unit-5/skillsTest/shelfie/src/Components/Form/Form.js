import React, {Component} from 'react';
import axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: 0,
            img: '',
            
        }
        this.handleReset = this.handleReset.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePriceInput= this.handlePriceInput.bind(this);
        this.handleImgUrl = this.handleImgUrl.bind(this);
    }
    componentDidUpdate(preProps){
        const {name,price,img} = this.props
        if(this.props.selected !== preProps.selected){
            this.setState({name: name, price: price, img: img})
            
         }

    }
    handleNameInput(val){
        this.setState({name: val})
       
    }
    handlePriceInput (val){
        this.setState({price: val})
        
    }
    handleImgUrl (val) {
        this.setState({img: val})
        
    }
    createProduct = ()=>{
        const {name,price,img} = this.state
        axios.post('/api/product', {name:name, price:price, img:img})
        .then(()=>this.props.inventoryFn)
        .catch((err)=> console.log(err))
        this.handleReset()
    }

    handleReset(){
        this.setState({name:'',price: 0, img:''} )
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
                <button onClick={this.createProduct}>Add to Inventory</button>
                
                    
                </form>
                
                 
        
            </div>
            
        )
    }
}
export default Form;