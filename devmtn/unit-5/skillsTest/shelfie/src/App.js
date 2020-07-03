import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component{
    render(){
        return(
            <div className='App'>
                <Header/>
                <Dashboard/>
                <Product/>
                <Form/>
            </div>
        )
    }
}

export default App;
