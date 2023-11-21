//stylesheet
import "./form-log-in.css";
//module packages
import { useState } from "react";
//components


function FormLogIn({setUser}) { 

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name === "" || password === "") {
            setError(true)
            return
        }
        setError(false)

        setUser([name])
    }

    return (
        <div className="box-container">
            <h2 className="tittle-log">Welcome</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="inputs" value={name} onChange={event => setName(event.target.value)}
                />
                <input type="password" placeholder="Password" className="inputs" value={password} onChange={event => setPassword(event.target.value)}/>
                <button className="login-button">Sign In</button>
            </form>
            {error && <p>Please put the name/password</p>}
        </div>
    )
}

export default FormLogIn;