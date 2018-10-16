import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
  	super();
    this.state = {
    	currentTodo: '',
      todos: []
    };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }
  
  onChangeText(event) {
  	this.setState({ currentTodo: event.target.value });
	}
  
  onSubmitText(event) {
    event.preventDefault()
    this.setState({
      currentTodo: '', 
      todos: [...this.state.todos, this.state.currentTodo]
    });
  }
  
  render() {
    return (
      <div id="box">
        <form onSubmit={this.onSubmitText}>
          <input value={this.state.currentTodo} onChange={this.onChangeText} />
          <button>Aggiungi</button>
		  <button onClick={() => this.setState({currentTodo: '',todos: []})}>Cancella</button>
        </form>
        <ul>
        {
          this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
        </ul>
      </div>
    )
  }
}

export default App;
