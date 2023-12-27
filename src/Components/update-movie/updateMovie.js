//stylesheet
import "./updateMovie.css";
//module packages
import { useState } from "react";
//components


function UpdateMovie({id,setShowUpdate}) {

    //const[updateOk,setupdateOk]= useState(false)

    const[type,setType]=useState("text");
    const[generoOff,setGeneroOff]=useState(true)
    const[dbName,setdbName]= useState("")

    const definirCampo=(event)=>{

        let campo=event.target.value

        if(campo === "name") {
            setType("text")
            setGeneroOff(true)
            setdbName("name")
        }
        if(campo === "genre"){
            setGeneroOff(false)
        }
        if(campo === "duration"){
            setType("number")
            setGeneroOff(true)
            setdbName("duration")
        }
        if(campo === "rating"){
            setType("number")
            setGeneroOff(true)
            setdbName("rating")
        }
        if(campo === ""){
            setType("text")
            setdbName("")
        }
    }

    const updateMovieFunction = async (event) => {

        event.preventDefault();
/*
        await fetch ("http://localhost:3000/movies/updateMovie",{
            method:"update",
            body:JSON.stringify(),
            headers:{
                "content-type":"application/json"
            }
        })
        .then((res)=>console.log(res))
        .then(data=>event.target.reset())
        .then(()=> {
            setupdateOk(true);
            setTimeout(()=>setupdateOk(false),2000)
        })
        .catch((error)=>console.log(error))*/
    }

    return (
        <div className="update-container">
            <button className="closeUpdate-buttom" onClick={()=> setShowUpdate(false)}><b>X</b></button>
            <form className="formUpdate-container" onSubmit={(event)=>updateMovieFunction(event)}>
                <div>
                    <label htmlFor="opcion-a-editar">What are you going to edit?</label>
                    <select className="inputUpdate-style" id="opcion-a-editar" onChange={(event)=>definirCampo(event)} >
                        <option value="">Select an Option </option>
                        <option value="name">Name</option>
                        <option value="genre">Genre</option>
                        <option value="duration">Duration</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Dato-a-cambiar">Info to edit</label>
                    {generoOff ? <input className="inputUpdate-style" type={type} id="Dato-a-cambiar" name={dbName} /> : 
                    <select name="genre" id="Dato-a-cambiar">
                        <option value="">Select a Genre </option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Terror">Terror</option>
                        <option value="Science fiction">Science fiction</option>
                        <option value="Suspense">Suspense</option>
                        <option value="Superheros">Superheros</option>
                        <option value="Romance">Romance</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Drama">Drama</option>
                        <option value="Musical">Musical</option>
                        <option value="Animation">Animation</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Horror">Horror</option>
                </select>
                    }
                </div>
                <input className="sendUpdate" type="submit" value="Update"/>
            </form>
            {/*updateOk === false? "" :*/<p className="update-confirmation-text">¡Movie Updated!</p>}
        </div>
    )
}

export default UpdateMovie;



