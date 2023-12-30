//stylesheet
import "./delete-movie.css"
//module packages
import { useState } from "react";
//components


function DeleteMovie({setShow, setResetMovies, resetMovies}) {

    const[messageOk,setMessageOk]= useState(false)
    
    const deleteMovie = async (event) => {

        event.preventDefault();

        const formId={
            "movieId":event.target[0].value 
        }

        await fetch("https://movie-app-37pf.onrender.com/movies/deleteMovie",{
            method:"delete",
            body:JSON.stringify(formId),
            headers:{
                "content-type":"application/json"
            }
        })
        //.then((res)=>console.log(res))
        .then(data=>event.target.reset())
        .then(()=> {
            setMessageOk(true);
            setTimeout(()=>{setMessageOk(false);
                setResetMovies(!resetMovies)},2000
                )
        })
        .catch((error)=>console.log(error))
    }

    return(
        <div className="deleteMovie-container">
            <button className="close-button-deleteMovie" onClick={()=> setShow(false)}>Cerrar </button>
            <h3 className="tittle-delete-form">Delete your movie</h3>
            <form className="delete-movie-form" onSubmit={(event)=>deleteMovie(event)}>
                <div>
                    <label htmlFor="movieId">Movie Id</label>
                    <input className="delete-input" type="text" name="id" id="movieId"/>
                </div>
                <input className="delete-button" type="submit" value="Delete"/>
            </form>
            {messageOk === false? "" :<p className="delete-confirmation-text">¡Movie Deleted!</p>}
        </div>
    )
}

export default DeleteMovie;