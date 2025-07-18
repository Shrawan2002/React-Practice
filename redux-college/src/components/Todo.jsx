import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../feature/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state)=>state.todos);
    const dispatech = useDispatch();

    let handleDelete = (id)=>{
        dispatech(deleteTodo(id))
    }

    let handleDone = (id)=>{
        dispatech(marksAsDone(id));
    }

    return(
        <>
        <h3>Todo List App</h3>
        <AddForm/>
         <ul>
  {todos.map((todo) => (
    <li key={todo.id} style={{ marginBottom: "10px", listStyle: "none" }}>
      <span
        style={{
          padding: "20px",
          textDecoration: todo.isDone ? "line-through" : "none",
        }}
      >
        {todo.task}
      </span>
      <button
        onClick={() => handleDelete(todo.id)}
        style={{ marginRight: "10px", backgroundColor: "#ff4d4d", color: "white" }}
      >
        Delete
      </button>
      <button
        onClick={() => handleDone(todo.id)}
        style={{ backgroundColor: "#4CAF50", color: "white" }}
      >
        Mark As Done
      </button>
    </li>
  ))}
</ul>

        </>
    )
}