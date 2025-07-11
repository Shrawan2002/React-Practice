import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Profile(){

    const {user} = useContext(UserContext);

    if(!user) return <div className="#">Please login first!</div>
    return <div>welcome: {user.userName}</div>
}