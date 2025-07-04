import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
export default function AddForm(){
    let [task,setTask] = useState("");
    const dispatch = useDispatch()

    let handleForm = (event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    }
    return(
        <>
        <form onSubmit={handleForm}>
            <input type="text" name="" id="" placeholder="enter task" value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button>Add Tasks</button>
        </form>
        </>
    )
}