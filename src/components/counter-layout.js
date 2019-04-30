import React from 'react';

const CounterLayout = (props) => {
	const { handleClickIncrement, message, handleClickDecrement, counter } = props;
	return (
		<div data-test="component-app">
			<h4 data-test="message-area">{message}</h4>
			<h1 data-test="counter-display">The counter us currently {counter}</h1>
			<button data-test="increment-button" onClick={handleClickIncrement}>
				Increment
			</button>
			<button data-test="decrement-button" onClick={handleClickDecrement}>
				Decrement
			</button>
		</div>
	);
};

export default CounterLayout;
