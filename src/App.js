import React, { Component } from 'react';
// import logo from './logo.svg';
import BitCoinPriceContainer from './sections/container-component ';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BitCoinPriceContainer />
      </div>
    );
  }  
}

export default App;
