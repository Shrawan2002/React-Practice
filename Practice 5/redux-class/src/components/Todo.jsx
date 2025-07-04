import {useDispatch, useSelector} from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../feature/todo/todoSlice";
export default function Todo(){
    let todos = useSelector((state) => state.todos);
    let dispatch = useDispatch();
    console.log(todos);
    let handleDelete = (id)=>{
        dispatch(deleteTodo(id))
    }
    return (
        <>
        <AddForm/>
        <h2>Todo</h2>
        <ul>
            {
                todos.map((todo)=> (
                    <li key={todo.id}>{todo.task}
                    <button onClick={()=> handleDelete(todo.id)}>delete</button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}