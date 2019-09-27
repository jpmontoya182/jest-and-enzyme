import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<Fragment>
				<h4>This is the home page</h4>
				<Link to="/counter" className="btn btn-primary">
					Counter
				</Link>
			</Fragment>
		);
	}
}
