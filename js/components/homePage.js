import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export class HomePage extends React.Component{

	render(){

		return (
			<div className="jumbotron">
				<h1>Tech Tutorials Administration</h1>
				<p>React,react router and flux for ultra responsive web apps</p>
				<br/>
				<Link to="about" className="btn btn-primary btn-lg">Learn More!</Link>
			</div>
		);
	}
}
