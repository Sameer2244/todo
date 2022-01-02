import React,{useState} from 'react'
import TodoContext from './TodoContext'


const TodoState=(props)=> {
    const [todoInput, setTodoInput] = useState({
        input:'',
        list:[],
    });
    const [minput, setMInput] = useState('')
    const [pending, setPending] = useState([])
    const [inprogress, setInprogress] = useState([])
    const [done, setDone] = useState([])
    return (
        <TodoContext.Provider value={{todoInput,setTodoInput,pending,setPending,inprogress,setInprogress,done,setDone,minput,setMInput}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState;