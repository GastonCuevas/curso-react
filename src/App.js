import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Box extends Component {
// 	render() {
// 		return (
// 			<div style={{border: '1px solid black', margin: '5', padding: '5'}}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }

function Box (props) {
	return (
		<div style={{border: '1px solid black', margin: '5', padding: '5'}}>
			{props.children}
		</div>
	);
}

// class Article extends Component {
// 	render() {
// 		const { author, children, date, title } = this.props;
// 		return (
// 			<section>
// 				<h2>{title}</h2>
// 				{author && <p>Escrito por {author}</p>}
// 				<Box>{date}</Box>
// 				<article>
// 					{children}
// 				</article>
// 			</section>
// 		)
// 	}
// }

//Cuando tenemos un componente que solo tiene un metodo render (sin constructor ni state), podemos convertirlo en una funcion
//A esto se le llama Stateless Functional Component
//Las props se reciben como argumento de la funcion
function Article (props) {
	return (
		<section>
			<h2>{props.title}</h2>
			{props.author && <p>Escrito por {props.author}</p>}
			<Box>{props.date}</Box>
			<article>
				{props.children}
			</article>
		</section>
	)
}

// class Button extends Component {
// 	render () {
// 		return (
// 			<button style={{borderColor: this.props.borderColor, display: 'block'}}>
// 				{this.props.label}
// 			</button>
// 		)
// 	}
// }

//Otra forma de escribir un Stateless Functional Component es usando arrow functions
//Cuando el parametro se llama igual que la prop no es necesario asignarla
//Cuando usamos stateless components podemos asignar valores por defecto a las props en la declaracion de los parametros
const Button = ({ borderColor = 'red', label }) => {
	return (
		<button style={{borderColor, display: 'block', margin: '0 auto'}}>
			{label}
		</button>
	)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article title="Aprendiendo React" author={true} date={new Date().toLocaleDateString()}>
			<p>React es una librería de JavaScript para construir interfaces de usuario.</p>
			<strong>Es mantenida por Facebook y una comunidad de desarrolladores individuales y empresas.</strong>
		</Article>
		<br />
		<Button label="Click Aqui"></Button>
      </div>
    );
  }  
}

export default App;
