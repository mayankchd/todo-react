import React from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
	constructor(props) {
	  		super(props);
	}

	handleDelete = (todo) => {
		this.props.onDelete(todo);
	}

	toggleCompleted = (todo) => {
		this.props.toggleCompleted(todo);
	}

	handleEdit = (todo , newTodoBody) => {
		this.props.handleEdit(todo , newTodoBody);
	}

	render() {
		if(this.props.todos){
		 return (
		 		<div className="todo-item">
		 			<ul className="list-group">
		 				{this.props.todos.map((todo , index)=>{
		 					return <TodoListItem 
		 								key={index+todo.body} 
		 								todo={todo} 
		 								onDelete={this.handleDelete} 
		 								toggleCompleted={this.toggleCompleted}
		 								handleEdit={this.handleEdit}
		 							/>;
		 				})}
					</ul>
		 		</div>	
		 	);
		}
	}
}

export default TodoList;