import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		};
	}

	handleClickIncrement = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	render() {
		const { counter } = this.state;

		return (
			<div data-test="component-app">
				<h1 data-test="counter-display">The counter us currently {counter}</h1>
				<button data-test="increment-button" onClick={this.handleClickIncrement}>
					Increment
				</button>
			</div>
		);
	}
}

export default App;
