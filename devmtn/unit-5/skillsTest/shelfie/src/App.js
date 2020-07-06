import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventory: [],
            selected: ''
            
            
        }
          
    }
    componentDidMount(){
     this.getInventory();
     
    }
    
    getInventory = ()=>{
        axios.get('/api/inventory')
        .then(res => this.setState({inventory: res.data}))
        .catch(err => console.log(err))
    }
    selectedProduct= (id) =>{
        
    }
    
    

    render(){
       
        return(
            <div className='App'>
                <Header/>
                <Dashboard inventory={this.state.inventory} inventoryFn={this.getInventory} />
                <Product/>
                <Form inventoryFn = {this.getInventory} selected={this.state.selected}/>
            </div>
        )
    }
}

export default App;
