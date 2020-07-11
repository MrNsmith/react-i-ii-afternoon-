import React, {Component} from 'react';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import Nav from './Components/Nav/Nav';

import './App.css';


class App extends Component {
    render(){
        return(
            <div className='App'>
              <Nav/>
              <Auth/>
              <Dashboard/>
              <Form/>
              <Post/>
            </div>
        )
    }
}

export default App