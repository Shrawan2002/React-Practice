import { useContext } from "react"
import { SubjectContext } from "./ContextApi"

export default function Subject(){
    // const subject = useContext(SubjectContext);
    return(
        <div>
            <h1> Subject = {subject}</h1>
        </div>
    )
}