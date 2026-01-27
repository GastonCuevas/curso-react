import React, { Component } from 'react';
import cars from './data/cars.json';
import logo from './logo.svg';
import './App.css';

class CarItem extends Component {
  render() {
    const { car, id } = this.props;
    return (
      <li>
        <p><strong>Key: </strong>{id}</p>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    );
  }
}

class App extends Component {
  render() {
    // const numbers = [1, 1, 3, 4, 5];

    return (
      <div className="App">
        {/* <h4>Trabajando con listas</h4> */}
        {/* {numbers.map((number, index) => (
          <p key={number}>El número es: {number}</p>
        ))} */}
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {cars.map((car) => {
            return (
              <CarItem key={car.id} id={car.id} car={car} />
            );
          })}
        </ul>
      </div>
    );
  }  
}

export default App;
