import React from "react";

class TodoListItem extends React.Component {

	state = {
		editing : false ,
		editText : this.props.todo.body
	}

	constructor(props) {
	  		super(props);
	}

	handleClick = (e) => {
		this.props.onDelete(this.props.todo);
	}

	toggleCompleted = (e) => {
		this.props.toggleCompleted(this.props.todo);
	}

	handleDblClick = (e) => {
		this.setState({editing : !this.state.editing});
	}

	handleChange = (e) => {
		this.setState({
			editText : e.target.value
		});
	}

	handleSaveEdit = (e) => {
		if (event.keyCode !== 13) {
			return;
		}

		this.handleEdit();
	}

	handleBlurEdit = (e) => {
		if(event.type!="blur"){
			return;
		}
			this.handleEdit();
	}

	handleEdit = () => {
		this.props.handleEdit(this.props.todo , this.state.editText);	
		this.setState({
			editing : false
		});					
	}

	componentDidUpdate = (prevprops , prevstate) => {
		if(!prevstate.editing && this.state.editing) {
			var node = React.findDOMNode(this.refs.editText);
			node.focus();
			node.setSelectionRange(node.value.length, node.value.length);
		}
	}

	renderTodo() {
		return (
					<li className="list-group-item">
					<div>
					<label className={this.props.todo.completed ? 'completed' : '' }
						   onDoubleClick={this.handleDblClick}
					>
					{this.props.todo.body}
					</label>
					
					<button 
						onClick={this.handleClick}
					>
					&#10799;
					</button>
					<button 
						className={this.props.todo.completed ? 'bcompleted' : ''} 
						onClick={this.toggleCompleted}
					>
					&#x2713;
					</button>
					</div>
					</li>			

			);
	}

	renderEdit() {
		return (
					<li className="list-group-item editing">
						<input 
							type="text" 
							className="form-control"
							onKeyDown={this.handleSaveEdit}
							onBlur={this.handleBlurEdit}
							value={this.state.editText}
							ref="editText"
							onChange={this.handleChange}
						/>
					</li>

			   );
	}

	render() {
					if(this.state.editing){
						return this.renderEdit();
					}
					else{
						return this.renderTodo();
					}
	}
}

export default TodoListItem;