import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Todo} from './todo.js';
import TodoStore from '../stores/todoStore.js';
import * as TodoActions from '../actions/todosActions.js';

export class Todos extends React.Component{

	constructor(){
		super();
		this.state={
			todos: TodoStore.getAll()
		};
		this.getTodos=this.getTodos.bind(this);
	}

	componentWillMount(){
		console.log("Mounted");
		TodoStore.on('change',this.getTodos);

		console.log("count",TodoStore.listenerCount("change"));
	}

	getTodos(){
		this.setState({
				todos: TodoStore.getAll()
			});
	}

	componentWillUnmount(){
		TodoStore.removeListener("change",this.getTodos);
		console.log("removed");
	}

 	createTodo(text){
 		//console.log(text);
 		if(text!==""){
 			TodoActions.createTodo(text);
 		}
 		else{
 			alert("Empty TODO,Please enter valid TODO");
 		}
 		
 	}

 	deleteTodo(todoId){
 		console.log("ID deleted :",todoId);
 		TodoActions.deleteTodo(todoId);
 	}

	render(){

		console.log("Data : "+window.parent.location.href);
console.log("called");

		const todos=this.state.todos.map((todo,index)=><Todo key={todo.id} deleteTodoHandler={(id)=>this.deleteTodo(id)} {...todo} />);

		
		const {params,location}=this.props;
		const {article}=params;
		const {query}=location;

		return (
			<div>
			TODO Task : <input type="text" size="15" ref={(todoEl)=>this.todoEl=todoEl}/>
			<br/>
			<button onClick={()=>this.createTodo(this.todoEl.value)}>Create</button>
				<h3>Todos</h3>
				<hr/>
				{todos}
			</div>
		);
	}
}
