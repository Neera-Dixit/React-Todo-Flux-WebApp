import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export class Favourites extends React.Component{

	render(){

		return (
			<div>
				Featured
				<br/>
				<Link to="about" className="btn btn-primary btn-lg">Learn More!</Link>
			</div>
		);
	}
}
