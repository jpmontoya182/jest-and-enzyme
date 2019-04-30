import React, { Component } from 'react';
import CounterLayout from '../components/counter-layout';

class Counter extends Component {
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
			<CounterLayout
				message={message}
				counter={counter}
				handleClickIncrement={this.handleClickIncrement}
				handleClickDecrement={this.handleClickDecrement}
			/>
		);
	}
}

export default Counter;
