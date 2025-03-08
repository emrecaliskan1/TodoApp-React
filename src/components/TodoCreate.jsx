import React, { useState } from 'react'
import '../App.css'


function TodoCreate({onCreateTodo}) {

    const [newTodo,setNewTodo] = useState('');

    //Yeni todo eklendikten sonra inputu boşalt
    const clearInput = () => {
        setNewTodo('');  
    }

    const createTodo =()=>{
        if(!newTodo) return;
        const request = {
            id : Math.floor(Math.random()*99999999),
            content:newTodo
        }
        onCreateTodo(request);
        clearInput();
    }

  return (
    <div className='todo-create'>
        <input 
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        className='todo-input' type="text" placeholder='Todo giriniz:'/>
        <button onClick={createTodo} className='todo-create-button'>Todo Oluştur</button>

    </div>
  )
}

export default TodoCreate