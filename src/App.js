import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Invitation from './invitation/invitation';
import ConditionalSection from './sections/conditional';

// function Hello (props) {
//   return <h1>{ props.title }</h1>;
// }
// Lo mismo pero con arrow function
// const Hello = (props) => <h1>{ props.title }</h1>;
//Lo mismo pero con clase de EMCAScript 6
// class Hello extends Component {
//   render() {
//     return <h1>{ this.props.title }</h1>;
//   }
// }

// class Text extends Component {
//   render() {
//     const { 
//       arrayOfNumbers, 
//       multiply, 
//       objectWithInfo,
//       title
//     } = this.props;
//     const mappedNumbers = arrayOfNumbers.map(num => multiply(num)).join(', ');
//     return (
//     <div>
//       {title}
//       <p>{mappedNumbers}</p>
//       <p>{objectWithInfo.key}</p>
//       <p>{objectWithInfo.key2}</p>
//       {/* <p>{text}</p>
//       <p>{number}</p> */}
//     </div>
//     );
//   }
// }

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Title.defaultProps = {
  text: 'Este es el titulo por defecto'
}

class Contador extends Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      });
    }, 1000);
  }
  state = {
    contador: this.props.contadorInicial
  };

  render() {
    return (
      <ContadorNumero numero={this.state.contador} />
    );
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    return (
      <span>Propagacion de state a ContadorNumero: {this.props.numero}</span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Invitation /> */}
        {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Hello title="Welcome to React" />
              <Text 
                arrayOfNumbers={[1,2,3,4,5]}
                isActivated
                multiply={(number)=> number * 3}
                number={123}
                objectWithInfo={{ key: 'value', key2: 'other value' }}
                text="Texto en string" 
                title={<h1>Este es el titulo</h1>}/>
        </header> */}
        {/* <Title text="Otro valor"/> */}
        {/* <p>Primer componente con state</p>
        <Contador contadorInicial={30} /> */}
        <ConditionalSection />
      </div>
    );
  }  
}

export default App;
