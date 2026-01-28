import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';

class Box extends Component {
	render() {
		return (
			<div style={{border: '1px solid black', margin: '5', padding: '5'}}>
				{this.props.children}
			</div>
		);
	}
}

class Article extends Component {
	static propTypes = {
		author: PropTypes.string.isRequired
	}

	// constructor(props) {
	// 	super(props);
	// 	if (typeof props.author === 'undefined') {
	// 		console.warn('Author no está definido');
	// 		throw new Error('Author es un prop requerido para el componente Article');
	// 	}
	// }

	render() {
		const { author, children, date, title } = this.props;
		return (
			<section>
				<h2>{title}</h2>
				{author && <p>Escrito por {author}</p>}
				<Box>{date}</Box>
				<article>
					{children}
				</article>
			</section>
		)
	}
}

// Article.propTypes = {
// 	author: PropTypes.string
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Children props</h4>
		{/* <Box>Hola soy un children!</Box>
		<Box>Otro box con otro contenido</Box> */}
		<Article title="Aprendiendo React" author={true} date={new Date().toLocaleDateString()}>
			<p>React es una librería de JavaScript para construir interfaces de usuario.</p>
			<strong>Es mantenida por Facebook y una comunidad de desarrolladores individuales y empresas.</strong>
		</Article>
      </div>
    );
  }  
}

export default App;
