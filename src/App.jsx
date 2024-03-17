

import React, { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { getAllToDo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi'

function App() {
    const [todo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [toDoId, setToDoId] = useState("")
    const [isUpdating, setIsUpdating] = useState(false);
    useEffect(() => {
        getAllToDo(setToDo)
    }, [])

    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setToDoId(_id)
    }

    const handleAddToDo = () => {
        if (text.trim() !== "") { 
            if (isUpdating) {
                updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
            } else {
                addToDo(text, setText, setToDo)
            }
        } else {
            alert("Please enter something")
            console.log("enter something")
        }
        
    }
    

    return (
        <div className='App'>
            <div className="container">
                <h1>ToDo App</h1>
                <div className="top">
                    <input type="text" placeholder='add todos..' value={text} onChange={(e) => setText(e.target.value)} />
                    <div className="add" onClick={handleAddToDo}>
                        {isUpdating ? "Update" : "Add"}
                    </div>
                </div>
                <div className="list">
                    {todo.map((item) => {
                        return <ToDo key={item._id}
                            text={item.text}
                            updateMode={() => updateMode(item._id, item.text)}
                            deleteToDo={() => deleteToDo(item._id, setToDo)}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default App
