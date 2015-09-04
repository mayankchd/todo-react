import React from "react";
import InputComponent from "./InputComponent";
import TodoList from "./TodoList";

class TodoApp extends React.Component {

	state = {
		todos : [
		] ,
		newTodo : '' ,
	}

	constructor(props) {
		  		super(props);
	}

	handleChange = (newText) => {
		this.setState({
			todos : this.state.todos ,
			newTodo : newText 
		})
	}

	handleSubmit = () => {
		let newTodo = this.state.newTodo.trim();
		if(newTodo)
		{
			var newTodos = this.state.todos.concat({body : newTodo , "completed" : false});
			this.setState({
				todos : newTodos,
				newTodo : ""
			} , ()=> console.log(this.state.todos));
		}
	}

	handleDelete = (todo) => {
		let newTodos = this.state.todos.filter((item)=> {
			return item.body !== todo.body;
		});
		this.setState({
			todos : newTodos ,
			newTodo : this.state.newTodo
		});
	}

	toggleCompleted = (todo) => {
		let newTodos = [];
		this.state.todos.forEach((item) => {
			if(item.body === todo.body){
				item.completed = !item.completed ;
			}
			newTodos.push(item);
		});

		this.setState({
			todos : newTodos ,
			newText : this.state.newText
		})
		
	}

	handleEdit = (todo , newTodoBody) => {
		console.log(todo.body + "  " +newTodoBody);
		if(!newTodoBody){
			this.handleDelete(todo);
		}
		else if(todo.body === newTodoBody){
			return;
		}

		else{
			let newTodos = [];
			this.state.todos.forEach((item) => {
				if(item.body === todo.body){
					item.body = newTodoBody;
				}
				newTodos.push(item);
			});

			this.setState({
				todos : newTodos ,
				newText : this.state.newText
			})			
		}
	}

	render() {
		return (
			<div>
			<InputComponent 
				newTodo={this.state.newTodo} 
				onChange={this.handleChange} 
				onSubmit={this.handleSubmit}
			/>
			<TodoList 
				todos={this.state.todos}
				onDelete={this.handleDelete}
				toggleCompleted={this.toggleCompleted}
				handleEdit={this.handleEdit}
			/>
			</div>
			);
	}


}
export default TodoApp;