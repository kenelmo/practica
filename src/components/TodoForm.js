import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
			description: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleInputChange(e){
		const {value, name } = e.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddTodo(this.state);
		this.setState({
			title: '',
			description: '',
		});
	}

	render(){
		return(
			<div className="row mt-4">
				<form className="form-inline col-12" onSubmit={this.handleSubmit}>
					<div className="form-group col-4">
						<input
							type="text"
							name="title"
							className="form-control col-10"
							value={this.state.title}
							onChange={this.handleInputChange}
							placeholder="Nombre"
						/>
					</div>
					<div className="form-group col-6">
						<input
							type="text"
							name="description"
							className="form-control col-10"
							value={this.state.description}
							onChange={this.handleInputChange}
							placeholder="Descripción"
						/>
					</div>
					<button type="submit" className="btn btn-primary col-2">
						Crear
					</button>
				</form>
			</div>
		)
	}
}

export default TodoForm;