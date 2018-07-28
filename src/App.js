import React, { Component } from 'react';
import './App.css';

import { todos } from './todos.json';

import TodoForm from './components/TodoForm';
import Filter from './components/Filter';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index){
    this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className="container" key={i}>
          <div className="row pl">
            <div className="col-md-4 text-left prueba2 pl">
              <p>{todo.title}</p>
            </div>
            <div className="col-md-6 text-left prueba2">
              <p>{todo.description}</p>
            </div>
            <div className="col-md-2 text-left">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
        )
    });

    return (
      <div className="App">

        <Filter> </Filter>

        <div className="container prueba mt-4">
          <div class="row text-left pl ">
            <div class="col-4 prueba2 pl">
              <p>Nombre</p>
            </div>
            <div class="col-6 prueba2">
              <p>Descripción</p>
            </div>
            <div class="col-2">
              <p>Acción</p>
            </div>
          </div>
        
          <div className="row">
            { todos }
          </div> 

        </div>

        <div className="container mt-4">
          <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
        </div>

      </div>
    );
  }
}

export default App;
