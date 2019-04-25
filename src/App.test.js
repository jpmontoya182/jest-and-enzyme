import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the app component
 * @param {object} props  - Component props specific to this setup
 * @param {any} state -- Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />);
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
