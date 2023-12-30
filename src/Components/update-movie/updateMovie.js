//stylesheet
import "./updateMovie.css";
//module packages
import { useState } from "react";
//components


function UpdateMovie({id,setShowUpdate}) {

    const[updateOk,setupdateOk]= useState(false)

    const[type,setType]=useState("text");
    const[generoOff,setGeneroOff]=useState(true)
    const[dbName,setdbName]= useState("")
    const[numberMin,setNumberMin]= useState()    
    const[numberMax,setNumberMax]= useState()
    const[placeholderDepends,setPlaceholderDepends]= useState()
    
    const definirCampo=(event)=>{

        let campo=event.target.value

        //Debe de haber una manera mucho mas eficiente que usar un millón de estados, pero se me ocurrió de esta manera
        if(campo === "name") {
            setType("text")
            setGeneroOff(true)
            setdbName("name")
            setPlaceholderDepends()
        }
        if(campo === "genre"){
            setGeneroOff(false)
        }
        if(campo === "duration"){
            setType("number")
            setGeneroOff(true)
            setdbName("duration")
            setNumberMin(1)
            setNumberMax(300)
            setPlaceholderDepends()
        }
        if(campo === "rating"){
            setType("number")
            setGeneroOff(true)
            setdbName("rating")
            setNumberMin(1)
            setNumberMax(10)
            setPlaceholderDepends("1-10")
        }
        if(campo === ""){
            setType("text")
            setdbName()
            setPlaceholderDepends()
        }
    }

    const updateMovieFunction = async (event) => {

        event.preventDefault();
        
        const formInfo={
            "fieldToEdit": event.target[0].value,
            "infoToEdit":event.target[1].value,
            "id":id
        }
        
        await fetch ("http://localhost:3000/movies/updateMovie",{
            method:"put",
            body:JSON.stringify(formInfo),
            headers:{
                "content-type":"application/json"
            }
        })
        //.then((res)=>console.log(res))
        .then(data=>event.target.reset())
        .then(()=> {
            setupdateOk(true);
            setTimeout(()=>setupdateOk(false),2000)
        })
        .then(()=>window.location.reload())
        .catch((error)=>console.log(error))
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
                    <label htmlFor="Dato-a-cambiar">Info to edit </label>
                    {generoOff ? <input className="inputUpdate-style" type={type} id="Dato-a-cambiar" name={dbName} min={numberMin} max={numberMax} placeholder={placeholderDepends} /> : 
                    <select className="inputUpdate-style" name="genre" id="Dato-a-cambiar">
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
            {updateOk === false? "" :<p className="update-confirmation-text">¡Movie Updated!</p>}
        </div>
    )
}

export default UpdateMovie;



