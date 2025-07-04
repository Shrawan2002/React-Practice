import { useState } from "react"
import {genTicket,sum} from "./helper"
import Ticket from "./Ticket"
import Button from "./Button";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));

    let updateTicket = ()=>{
        setTicket(genTicket(n));
    }

    let isWinning = winCondition(ticket);
    return (
        <div>
            <h2>Lottery Ticket</h2>
            <Ticket ticket={ticket}/>
            <p style={{color:"red"}}>{isWinning?"congratulation!":""}</p>
          <br/>
          <Button action={updateTicket}/>
        </div>
    )
}