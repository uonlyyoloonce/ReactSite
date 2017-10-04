import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm,TodoList} from './componets/todo';
import {addTodo,generateId,findById,toggleTodo,updateTodo,removeTodo} from './lib/todoHelpers'
class App extends Component {
   state={
      todos:[
        { id:1,name:'Learn JSX1',isComplete:true},
        { id:2,name:'Build an Awesome App',isComplete:false},
        { id:3,name:'Ship It',isComplete:false}
    
      ],currentTodo:''
    }
 
    handleToggle= (id)=>{
    const todo=findById(id,this.state.todos);
    const toggled=toggleTodo(todo);
    const updatedTodos=updateTodo(this.state.todos,toggled);
    this.setState({todos:updatedTodos});
 
    }
    handleRemove=(id)=>{
      console.log('id : '+id);
     const removedTodos=removeTodo(this.state.todos,id);
     console.log( JSON.stringify( removedTodos))
     this.setState({todos:removedTodos});

    }
  handleSubmit=(evt)=>
  {
   evt.preventDefault();
   const newid=generateId();
   const newTodo= {id:newid, name:this.state.currentTodo,isComplete:false};
   const updateTodos=addTodo(this.state.todos,newTodo);
   this.setState({

    todos: updateTodos,
    currentTodo:'',
    errorMessage:''
   });

  }
  handleEmptySubmit=(evt)=>
  {
    evt.preventDefault();
    this.setState({
      errorMessage:'empty string'
    })
  }

  handleInputChange=(evt)=>{
    this.setState({
      currentTodo:evt.target.value
    });

  }
  render() {
    const   submitHandler=this.state.currentTodo?this.handleSubmit:this.handleEmptySubmit;
    return (
    
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
          <div className="Todo-App">
            {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange} 
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler}/>
          <TodoList  
          handleToggle ={this.handleToggle } 
          todos={this.state.todos}
          handleRemove={this.handleRemove}
          />
        
          </div>
      </div>
    );
  }
}

export default App;
