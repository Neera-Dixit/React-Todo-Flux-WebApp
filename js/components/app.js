import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header/header.js';
import {RouteHandler} from 'react-router';

export class App extends React.Component{

	render(){
		const containerStyle = {
     		 marginTop: "60px"
    	};

		return (
			<div>
				<Header/>

			  <div className="container" style={containerStyle}>
				<div className="row"> 
					<div className="col-lg-12"> 
						{this.props.children}
					</div>
				</div>
			  </div>

			</div>
		);
	}
}

