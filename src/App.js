import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
	render () {
		return (
			<button style={{borderColor: this.props.borderColor, display: 'block'}}>
				{this.props.label}
			</button>
		)
	}
}

Button.defaultProps = {
	borderColor: '#09f'
}

class ButtonDanger extends Component {
	render () {
		return <Button borderColor="#f00" label={this.props.label}></Button>
	}
}

class ButtonWithLegend extends Component {
	render () {
		return (
			<div>
				<Button borderColor={this.props.borderColor} label={this.props.label}></Button>
				<small>{this.props.legend}</small>
			</div>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Composicion vs Herencia</h4>
		<Button label="Click Aqui con composicion"></Button>
		<br />
		<ButtonDanger label="Cuidado! con composicion"></ButtonDanger>
		<br />
		<ButtonWithLegend label="Boton con explicacion con composicion" legend="Este es un boton con una leyenda"></ButtonWithLegend>
      </div>
    );
  }  
}

export default App;
