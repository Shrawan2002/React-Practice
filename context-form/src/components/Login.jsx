import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";

export default function Login(){
    const [userName,setUserName] = useState("");
    const [userPass,setUserPass] = useState();

    const {setUser} = useContext(UserContext);

    const handleSubmit = (event)=>{
          event.preventDefault();
          setUser({userName,userPass});
    }
    return(
        <div className="flex mx-19 w-full max-w-md">
            
            <input className="mx-10 p-10" type="text" value={userName}  onChange={(event)=>setUserName(event.target.value)} placeholder="enter your name" name="" id="" />
            <input className="mx-md p-10" type="password" value={userPass}  onChange={(event)=>setUserPass(event.target.value)} placeholder="enter your password" name="" id="" />
            <button className="p-10 mx-10 text-black outline-none  text-sm inline-block" onClick={handleSubmit}>Submit Form</button>
        </div>
    )
}