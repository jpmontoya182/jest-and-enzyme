import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			message: ''
		};
	}

	handleClickIncrement = () => {
		this.setState({
			counter: this.state.counter + 1,
			message: ''
		});
	};

	handleClickDecrement = () => {
		console.log(this.state.counter);
		if (this.state.counter === 0) {
			console.log('ingreso');
			this.setState({
				message: "counter can't go below zero"
			});
		} else {
			this.setState({
				counter: this.state.counter - 1
			});
		}
	};

	render() {
		const { counter, message } = this.state;

		return (
			<div data-test="component-app">
				<h4 data-test="message-area">{message}</h4>
				<h1 data-test="counter-display">The counter us currently {counter}</h1>
				<button data-test="increment-button" onClick={this.handleClickIncrement}>
					Increment
				</button>
				<button data-test="decrement-button" onClick={this.handleClickDecrement}>
					Decrement
				</button>
			</div>
		);
	}
}

export default App;
