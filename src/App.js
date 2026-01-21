import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '40px',
            alignItems: 'center',
            justifyItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Hola mundo!</h1>
              <h3>Vamos a aprender React</h3>
              <p>Hola mundo, estoy aprendiendo React</p>
              <strong>Y lo estoy disfrutando</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src='https://animesweet.com/wp-content/uploads/2022/12/kimetsu-no-yaiba-1-scaled.jpg' alt='KNYLogo' style={{ 
                width: '500px',
                height: '300px'
              }}></img>
              <table style={{ 
                backgroundColor: 'white', 
                borderRadius: '10px', 
                padding: '20px', 
                marginTop: '20px', 
                color: 'black',
                borderCollapse: 'collapse',
                width: '300px'
              }}>
                <thead>Kimetsu No Yaiba Characters</thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px' }}>Tanjiro Kamado</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px' }}>Nezuko Kamado</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px' }}>Zenitsu Agatsuma</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px' }}>Inosuke Hashibira</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px' }}>Kanao Tsuyuri</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </header>
      </div>
    );
  }  
}

export default App;
