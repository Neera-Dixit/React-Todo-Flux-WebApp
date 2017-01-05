import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export class NotFoundPage extends React.Component{

	render(){

		return (
			<div>
				<h1>Page Not Found</h1>
				<Link to="/" className="btn btn-primary btn-lg">Back To Home</Link>
			</div>
		);
	}
}
