import React from 'react'
import {BiEdit} from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"; // Note the corrected icon name
import "../App.css";
const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div>
      
      <div className="todo">
        <div className="text">
          {text}
          <div className="icons">
            <BiEdit className='icon' onClick={updateMode}>first</BiEdit>
            <AiFillDelete className='icon' onClick={deleteToDo}>second</AiFillDelete>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo
