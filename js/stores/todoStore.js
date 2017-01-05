import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/appDispatcher.js';

class TodoStore extends EventEmitter{

	constructor(){
		super();
		this.todos=[
			 {
			 	id:1,
			 	text:"Shop",
			 	complete:"Done"
			 },
			 {
			 	id:2,
			 	text:"Pay Bills",
			 	complete:"Not Done"
			 }
			];
	}

	getAll(){
		return this.todos;
	}

	createTodo(text){
		const id=Date.now();
		this.todos.push({
			id,
			text,
			complete:"Not Done"
		});
		this.emit("change");
	}

	deleteTodo(id){
		//const toDelete = new Set(['abc', 'efg']);
		this.todos = this.todos.filter((obj)=>{return obj.id!==parseInt(id)});//!obj.id==parseInt(id)
		this.emit("change");
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TODO" : {
				this.createTodo(action.text);
			}
			case "DELETE_TODO" : {
				this.deleteTodo(action.id);
			}

		}
	}

}

const todoStore=new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher=dispatcher;
export default todoStore;