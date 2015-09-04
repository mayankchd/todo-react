import React from "react";

class InputComponent extends React.Component {

	constructor(props) {
  		super(props);
	}

	handleChange = (e) => {
		var newText = e.target.value;
		this.props.onChange(newText);
	}

	handleOnkeyDown = (event) => {
		if (event.keyCode !== 13) { //13 is key code for "ENTER" key
			return;
		}

		event.preventDefault();			
		this.handleSubmit();
	}
  
	handleSubmit = ()=> {
		this.props.onSubmit();
	}  
	render() {
		return (
			<div>	
			<input 
				type="text" 
				placeholder="I need to ...." 
				className="form-control"
				onChange={this.handleChange}
				onKeyDown={this.handleOnkeyDown}
				onBlur={this.handleSubmit}
				value={this.props.newTodo}
				autoFocus={true}
				ref="newTodo"
			>
			</input>
			</div>
			);	
	}

}
export default InputComponent;
