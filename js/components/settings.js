import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export class Settings extends React.Component{

	render(){

		return (
			<div>
				Settings Page
				<br/>
				<Link to="about" className="btn btn-primary btn-lg">Learn More!</Link>
			</div>
		);
	}
}
