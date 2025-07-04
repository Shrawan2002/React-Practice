import TicketNum from "./TicketNum";

export default function Ticket({ticket}){
    return (
        <div>
            {ticket.map((el,idx)=>(
                <TicketNum num={el} key={idx}/>
            ))}
        </div>
    )
}