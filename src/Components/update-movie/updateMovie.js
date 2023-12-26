//stylesheet
import "./updateMovie.css";
//module packages
import { useState } from "react";
//components


function UpdateMovie({setShowUpdate}) {

    //const[updateOk,setupdateOk]= useState(false)

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
                    <select className="inputUpdate-style" id="opcion-a-editar">
                        <option value="">Select an Option </option>
                        <option value="name">Name</option>
                        <option value="genre">Genre</option>
                        <option value="duration">Duration</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Dato-a-cambiar">Info to edit</label>
                    <input className="inputUpdate-style" type="text" id="Dato-a-cambiar"></input>
                </div>
                <input className="sendUpdate" type="submit" value="Update"/>
            </form>
            {/*updateOk === false? "" :*/<p className="update-confirmation-text">¡Movie Updated!</p>}
        </div>
    )
}

export default UpdateMovie;