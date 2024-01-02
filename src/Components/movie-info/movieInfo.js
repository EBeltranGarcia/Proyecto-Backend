//stylesheet
import "./movieInfo.css";
//module packages
import { useState } from "react";
//components
import UpdateMovie from "../update-movie/updateMovie";

function MovieInfo({genre,duration,rating,id,setShow,setResetMoviesEdit,resetMoviesEdit}) {

    const [showUpdate, setShowUpdate]= useState(false);

    const showUpdateFolder=() => {
        setShowUpdate(true)
    }

    return (
        <div className="movieInfo-container">
            <section className="infoId-container">
                <h5>Movie id: {id}</h5>
                <button className={showUpdate === true? "editMovie-button2": "editMovie-button"} onClick={showUpdateFolder}>Edit Movie</button>
                {showUpdate === true ? <UpdateMovie id={id} setShowUpdate={setShowUpdate} setResetMoviesEdit={setResetMoviesEdit} resetMoviesEdit={resetMoviesEdit}/>: "" }
            </section>
            <ul>
                <li className="list-container">
                    <h4 className="info-tittle">Genre:</h4>
                    <p className="bottom-line" >{genre}</p>
                </li>
                <li className="list-container">
                    <h4 className="info-tittle">Duration:</h4>
                    <p className="bottom-line" >{duration} min</p>
                </li>
                <li className="list-container"> 
                    <h4 className="info-tittle">Rating:</h4>
                    <p className="bottom-line" >{rating}/10</p>
                </li>    
            </ul>
            <button className="close-button" onClick={()=> setShow(false)}>Close</button>
        </div>
    )
}

export default MovieInfo;