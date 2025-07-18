import { useState } from "react"
import {useDispatch} from "react-redux"
import { addTodo } from "../feature/todo/todoSlice";
export default function AddForm(){
    let [task,setTask] = useState("");
    
    const dispatch = useDispatch()
      
    let handleSubmit = (event)=>{
        event.preventDefault();
           dispatch(addTodo(task));
    }
    return(
        <>
       <form onClick={handleSubmit}>
         <input type="text" value={task} onChange={(event)=> setTask(event.target.value)} />
        <button >Add Task</button>
       </form>
        </>
    )
}