import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            inventory:  [
                {
                name: 'shirt',
                price: 4,
                imgUrl:'https://i.ebayimg.com/images/g/L6wAAOSw40Zb2dIt/s-l300.jpg'
                },
                {
                name: 'pants',
                price: 5,
                imgUrl:'https://i.ebayimg.com/images/g/L6wAAOSw40Zb2dIt/s-l300.jpg'
                },
                {
                name: 'T-shirt',
                price: 9,
                imgUrl:'https://i.ebayimg.com/images/g/L6wAAOSw40Zb2dIt/s-l300.jpg'
                }
            ]
                
        }
    }
    render(){
        return(
            <div className='App'>
                <Header/>
                <Dashboard inventory={this.state.inventory}/>
                <Product/>
                <Form/>
            </div>
        )
    }
}

export default App;
