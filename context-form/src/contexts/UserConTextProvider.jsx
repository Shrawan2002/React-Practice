import { Children, use, useState } from "react"
import UserContext from "./UserContext"

export  const  UserConTextProvider = ({Children})=>{
    let [user,setUser] = useState();
    return(
        <UserContext.Provider value={{user,setUser}}>
          {Children}
        </UserContext.Provider>
    )
}