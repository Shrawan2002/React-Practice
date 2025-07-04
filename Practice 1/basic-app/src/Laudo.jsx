import { useState } from "react"

export default function Laudo(){
    let [moves,setMoves] = useState({blue:0,red:0,green:0});
    let updateMoves = ()=>{
        setMoves((cur)=>{
            return {...cur,blue: cur.blue+1};
        })
    }
    return(
        <div>
            <p>BlueMoves = {moves.blue} </p>
            <button onClick={updateMoves} style={{backgroundColor:"blue"}}>+1</button>
            <p>RedMoves = {moves.red} </p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>GreenMoves = {moves.green} </p>
            <button style={{backgroundColor:"green"}}>+1</button>
        </div>
    )
}