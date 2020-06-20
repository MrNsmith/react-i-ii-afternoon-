import React, { Component }from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Data from './Components/Data';
import './App.css';

class App extends Component {
  

  render(){
    return (
      <div className="App">
        <Header className="Header"/>
        <Data/>
      </div>
    );

  }
}

export default App;