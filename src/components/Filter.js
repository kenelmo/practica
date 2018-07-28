import React, { Component } from 'react';

class Filter extends Component {
	render(){
		return(
			<div className="container mt-4">
				<div className="row">
					<form className="form-inline col-12">
						<div className="form-group col-10">
							<input
								type="text"
								name="title"
								className="form-control col-5"
								placeholder="Filtro de Nombre"
							/>
						</div>
						<button type="submit" className="btn btn-primary col-2">
							Buscar
						</button>
						
					</form>
				</div>
			</div>
			)
	}
}

export default Filter;

