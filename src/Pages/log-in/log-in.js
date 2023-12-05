//stylesheet
import "./log-in.css";
//module packages
import { useState } from "react";
//components
import FormLogIn from "../../Components/form-log/form-log-in";
import UserHome from "./user-home/user-home";

function LogIn() { 

    const [user, setUser] = useState([])

    return (
        <div>
            {
                !user.length > 0 ? <FormLogIn setUser={setUser}/> : <UserHome user={user} setUser={setUser}/>
            }
        </div>
    )
}

export default LogIn;