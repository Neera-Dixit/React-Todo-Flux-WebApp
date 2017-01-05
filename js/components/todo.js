import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export class Todo extends React.Component{

	constructor(){
		super();
	}
	render(){
		console.log("prop : ",this.props);
		let {id,text,complete}=this.props;

		return (
			<div>
				Todo : {text}
				<br/>
				Status : {complete}
				<br/>
				<button onClick={()=>this.props.deleteTodoHandler(id)}>Delete Todo</button>
				<br/>
				<hr/>
			</div>
		);
	}
}
