import React from 'react';
import { shallow } from 'enzyme';
import CounterLayout from './counter-layout';

/**
 * Factory function to create a ShallowWrapper for the app component
 * @param {object} props  - Component props specific to this setup
 * @param {any} state -- Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
	const wrapper = shallow(<CounterLayout {...props} />);
	if (state) {
		wrapper.setState(state);
	}
	return wrapper;
};

/**
 * Return shallowWrapper containin node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};

test('renders without error', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'component-app');
	expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, 'increment-button');
	expect(button.length).toBe(1);
});

test('render counter display', () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
	const wrapper = setup();
	const initialCounterState = wrapper.state('counter');
	expect(initialCounterState).toEqual(0);
});

test('clicking button increments counter display ', () => {
	const counter = 0;
	const wrapper = setup(null, { counter });

	// find button and click
	const button = findByTestAttr(wrapper, 'increment-button');
	button.simulate('click');
	wrapper.update();

	// find display and test de value
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.text()).toContain(counter + 1);
});

// ****************************************************
// Challenge

test('renders decrement button', () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, 'decrement-button');
	expect(button.length).toBe(1);
});

test('clicking button decrement', () => {
	const counter = 1;
	const wrapper = setup(null, { counter });

	// find button and click
	const button = findByTestAttr(wrapper, 'decrement-button');
	button.simulate('click');
	wrapper.update();

	// find display and test de value
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.text()).toContain(counter - 1);
});

test('message decrement lesser than zero', () => {
	const counter = 0;
	const wrapper = setup(null, { counter });

	// find button
	const button = findByTestAttr(wrapper, 'decrement-button');
	button.simulate('click');
	wrapper.update();

	// find message and test it
	const counterDisplay = findByTestAttr(wrapper, 'message-area');
	expect(counterDisplay.text()).toContain("counter can't go below zero");
});

test('clear error on increment', () => {
	// Initial values on zero
	const counter = 0;
	const wrapper = setup(null, { counter });

	// find button decrement and simulated error
	const buttonDecrement = findByTestAttr(wrapper, 'decrement-button');
	buttonDecrement.simulate('click');
	wrapper.update();

	// find button increment and simulated click +1
	const buttonIncrement = findByTestAttr(wrapper, 'increment-button');
	buttonIncrement.simulate('click');
	wrapper.update();

	// find message and test it
	const counterDisplay = findByTestAttr(wrapper, 'message-area');
	expect(counterDisplay.text()).toContain('');
});
