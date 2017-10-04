import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList=(props)=>{
  console.log('2');
  return (
    <div className="Todo-list">
    <ul>
      {props.todos.map(todo=>
  
        <TodoItem handleRemove={props.handleRemove} handleToggle={props.handleToggle} key={todo.id} {...todo}/>
        )}

    </ul>
  </div>
  )
   
}