
import axios from "axios"


const baseUrl =  process.env.URL;

export const getAllToDo = (setToDo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log(data);
        setToDo(data)

    })
}
export const addToDo=(text, setText, setToDo)=>{
    axios.post(`${baseUrl}/save`, {text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
}

export const updateToDo=(todoId, text, setToDo, setText, setIsUpdating)=>{
    axios.post(`${baseUrl}/update`, {_id:todoId, text})
    .then((data)=>{
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));
}


export const deleteToDo=(_id, setToDo)=>{
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data)=>{
        console.log(data);
        
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));
}


