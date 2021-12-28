import React, {useState} from 'react';
import './App.css';
import TodoList from './components/todolist';
import Button from './components/Button';

const initTodos =  [
    {
      value: 'найти тяночку', 
      id:'1'
    },
    {
      value: 'вивчити реакт', 
      id:'2'
    }, 
    {
      value: 'найти тяночку', 
      id:'3'
    }, 
    {
      value: 'найти тяночку', 
      id:'4'
    },
    {
      value:'test' , 
      id:'5'
    },
    
    ];

function App() {
 const [todos, setTodos] = useState(initTodos)
  
    const removeListItem = (id) => {
      setTodos(todos.filter((todo)=> {
        return todo.id !== id;
      }))
    }
    const clearListHandler = ()=> {
      setTodos([])
    }
  return (
    <div className="App">
      <h1> Todo List </h1>
      <TodoList todos={todos} removeListItem={removeListItem}/>
      <Button onClick={clearListHandler}>Clear all</Button>
    </div>
  );
}

export default App;
