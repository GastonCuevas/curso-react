import React, { Component } from 'react';

export default class Forms extends Component {
	constructor() {
		super();
		this.state = {
			inputName: '',
			inputTwitter: '@',
			inputTerms: true
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	handleChange = (e) => {
		console.log('handle change');
		console.log(e.target.checked);
		this.setState({
			inputTerms: e.target.checked
		});
	}

    render() {
		return (
			<div>
				<h4>Formularios</h4>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label htmlFor="name">Nombre: </label>
						<input type="text" id="name" name="userName" 
						onChange={e => this.setState({inputName: e.target.value})} 
						placeholder='introduce el nombre de usuario'
						ref={inputElement => this.inputName = inputElement}
						value={this.state.inputName}/>
					</p>
					<p>
						<label htmlFor="twitter">Twitter: </label>
						<input type="text" id="twitter" name="twitterAccount" 
						onChange={e => this.setState({inputTwitter: e.target.value})} 
						placeholder='introduce el nombre de usuario'
						ref={inputElement => this.inputTwitter = inputElement}
						value={this.state.inputTwitter}/>
					</p>

					<p>
						<label>
							<input onChange={this.handleChange} type="checkbox" 
							checked={this.state.inputTerms}/>Accepted Terms
						</label>
					</p>

					<button>Enviar</button>
				</form>
			</div>
		)
    }
}