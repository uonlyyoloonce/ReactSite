const todo = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
  
        return {
          ...state,
          completed: !state.completed
        };
        case 'REMOVE_TODO':
        { 
        return state.filter((a)=> a.id!== action.id);
    }
      default:
        return state;
    }
  };
  

  const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          todo(undefined, action)
        ];
      case 'TOGGLE_TODO':
        return state.map(t =>
          todo(t, action)
        );
        case 'REMOVE_TODO':
        return todo(state,action);
      default:
        return state;
    }
  };
  
  const visibilityFilter = (
    state = 'SHOW_ALL',
    action
  ) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
    }
  };
  
  const { combineReducers } = Redux;
  const todoApp = combineReducers({
    todos,
    visibilityFilter
  });
  
  const { createStore } = Redux;
  const store = createStore(todoApp);
  
  const { Component } = React;
  
  let nextTodoId = 0;
  class TodoApp extends Component {
    render() {
      return (
        <div>
          <input ref={node => {
            this.input = node;
          }} />
          <button onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            });
            this.input.value = '';
          }}>
            Add Todo
          </button>
          <ul>
            {this.props.todos.map(todo =>
            <div>
               <a href='#' onClick={
                   ()=>{
                    
                    store.dispatch(
                           {
                            type:'REMOVE_TODO',
                            id:todo.id

                           }
                       ) 
                   }
               }>X</a>
              <li key={todo.id}
               onClick={
                   ()=>{
                    store.dispatch(
                           {
                            type:'TOGGLE_TODO',
                            id:todo.id

                           }
                       )
                   }
               }
               style={
                   {
                       textDecoration:todo.completed?
                       'line-through':
                       'none'
                   }
               }
              >
                {todo.text}
              </li>
              </div>
            )}
          </ul>
        </div>
      );
    }
  }
  
  const render = () => {
    ReactDOM.render(
      <TodoApp
        todos={store.getState().todos}
      />,
      document.getElementById('root')
    );
  };
  
  store.subscribe(render);
  render();