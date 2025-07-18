import { useSelector } from "react-redux"
import AddForm from "./AddForm";

export default function Todo(){
    const todos = useSelector((state)=>state.todos);
    return(
        <>
        <h3>Todo List App</h3>
        <AddForm/>
         {
            todos.map((todo)=>(
                <li key={todo.id}>{todo.task }</li>
            ))
         }
        </>
    )
}