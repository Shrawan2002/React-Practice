import { use, useState } from "react";
import "./Form.css";
export default function Form(){
    let [formData,setFormData] = useState({
         fullName:"",
         userName:"",
         password:""
    })
    let handleInpChang = (event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        })
    }
    return(
        <div className="form">
            <form>
                <input type="text" name="fullName" onChange={handleInpChang} id="" placeholder="enter fullname" value={formData.fullName}  />
             <input type="text" name="userName" onChange={handleInpChang} id="" placeholder="enter user name" value={formData.userName}  />
              <input type="password" name="password" onChange={handleInpChang} id="" placeholder="enter password" value={formData.password} />
              <br/>
              <br/>
              <br/>
            <button> submit</button>
            </form>
        </div>
    )
}