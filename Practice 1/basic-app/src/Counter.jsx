import { useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0);
    let updateCount = ()=>{
        setCount((cur)=>{
           return cur+1;
        })
    }
    return(
     <div>
           <p>Count = {count}</p>
           <button onClick={updateCount}>IncreaseCount</button>
     </div>
    )
}