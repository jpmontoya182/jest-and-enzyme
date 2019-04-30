import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from './containers/Counter';
import Home from './containers/Home';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/counter" exact component={Counter} />
		</Router>
	);
};

export default App;
