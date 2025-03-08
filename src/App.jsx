import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }

  const removeTodo = (todoId) => {
    //todo'lar üzerinde dönüyor. koşulu sağlayanları cebine koy. false dönenleri çıkart.
    //silinmek istenen todoId=2.  id'si 1 ve 3 olanları yeni dizinin içine koyuyor.
    setTodos([...todos.filter((todo)=> todo.id!==todoId)]);

  }

  const updateTodo = (newTodo) => {
      const updatedTodos=  todos.map((todo)=> {
      if(todo.id !== newTodo.id){
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos])
  }


  return (
   <div className='App'>
      <div className='main'>
       <TodoCreate  onCreateTodo = {createTodo} />
       <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo = {updateTodo} />
      </div>
   </div>
  )
}

export default App
