import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";
import '../../css/Todo.css'


function Todo({todo,onRemoveTodo , onUpdateTodo}) {

  const {id,content} = todo; //object distracting

  const [editTable,setEditTable] = useState(false);

  const [newTodo,setNewTodo] = useState(content)

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id:id,
      content:newTodo
    }
    onUpdateTodo(request)

    setEditTable(false)
  }

  return (
    <div className='todo-item'> 
        <div className='todo-content'>
            {/* {content} */}
            {
              editTable ? 
              <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} 
              className='todo-input' type="text" /> : content
            }
        </div>
        <div className='todo-actions'>
            <IoIosRemoveCircle  className='todo-icon remove'
            onClick={removeTodo}/>
            {
              editTable ? <FaCheck  className='todo-icon check' onClick={updateTodo}/>
              : <FaEdit className='todo-icon edit' onClick={()=> setEditTable(true)} />
            }
            
        </div>
    </div>
  )
}

export default Todo