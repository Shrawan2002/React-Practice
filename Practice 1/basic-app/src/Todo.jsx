import { use, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    let [task,setTask] = useState("");
    let [newTask,setNewTask] = useState([{task:"hello",id:uuidv4(),isDone:false}])
    let updateTask = (event)=>{
        // console.log(event.target.value);
        setTask(event.target.value);
    }
    let updateNewTask = ()=>{
        setNewTask((cur)=>{
            return [...cur,{task:task,id:uuidv4(),isDone:false}];
        })
        setTask("");
    }

    let delBtn = (id)=>{
               setNewTask((cur)=>(
                cur.filter((el)=> el.id != id)
               ))
    }

    let allupper = ()=>{
        setNewTask((cur)=>(
            cur.map((el)=>{
                return {...el,task:el.task.toUpperCase()}
            })
        ))
    }
    let upper = (id)=>{
        setNewTask((cur)=>(
            cur.map((el)=>{
                if(el.id == id){
                    return {...el,task:el.task.toUpperCase()}
                }else{
                    return {...el};
                }
            })
    ))
    }
    let asmark = (id)=>{
        setNewTask((cur)=>(
            cur.map((el)=>{
                if(el.id == id){
                    return {...el, isDone:true}
                }else{
                    return {...el}
                }  
            })
        ))
    }
    return(
        <div>
            <input type="text" name="" onChange={updateTask} value={task} placeholder="enter your task" id="" />
            <button onClick={updateNewTask}>Add Task</button>
            <ul>
               {newTask.map((el)=>(
                 <li key={el.id} style={el.isDone?{textDecoration :"line-through"}: {}}>{el.task}
                 &nbsp; &nbsp;
                 <button onClick={()=>delBtn(el.id)}>DelBtn</button>
                 <button onClick={()=>upper(el.id)}>To Upper</button>
                 <button onClick={()=>asmark(el.id)}>As Mark Done</button>
                 </li>
               ))}
            </ul>
            <button onClick={allupper}>All Upper</button>
        </div>
    )
}