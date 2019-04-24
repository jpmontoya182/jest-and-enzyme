import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = (props = {}, state = null) => {
	return shallow(<App {...props} />);
};

test('renders without error', () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find("[data-test='component-app']");
	expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
	const wrapper = shallow(<App />);
	const button = wrapper.find("[data-test='increment-button']");
	expect(button.length).toBe(1);
});

test('render counter display', () => {
	const wrapper = shallow(<App />);
	const counterDisplay = wrapper.find("[data-test='counter-display']");
	expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {});

test('clicking button increments counter display ', () => {});
