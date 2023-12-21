//stylesheet
import "./add-movie.css"
//module packages
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from "react";
//components

function AddMovie() {

    const[messageOk,setMessageOk]= useState(false)

    const loadMovie = async (event) => {

        event.preventDefault();

        const formMovies={
            "name":event.target[0].value,
            "genre":event.target[1].value,
            "duration":event.target[2].value,
            "rating":event.target[3].value
        }

        await axios.post("http://localhost:3000/movies/insertMovie",formMovies)
        .then((res)=>console.log(res))
        .then(data=>event.target.reset())
        .then(()=> {
            setMessageOk(true);
            setTimeout(()=>setMessageOk(false),2000)
        })
        .catch((error)=>console.log(error))
    }

    return (
        <div>
            <video className='video-background-form' src="./assets/background-video-addMovie.mp4" autoPlay loop muted/>
            <form className="addMovie-Container" onSubmit={(event)=>loadMovie(event)}>
                <div className="backgroundForm-container">
                    <div className="text-input">
                        <label htmlFor="movieName">Movie Name </label>
                        <input className="input-style" type="text" name="name" id="movieName"/>
                    </div>
                    <div className="text-input">
                        <label htmlFor="movieGenre">Movie Genre </label>
                        <select className="input-style" name="genre" id="movieGenre">
                            <option value="Select">Select a Genre </option>
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
                    </div>
                    <div className="text-input">
                        <label htmlFor="movieDuration">Movie Duration </label>
                        <input className="input-style" type="number" name="duration" id="movieDuration" min="0" max="300" placeholder="In minutes"/>
                    </div>
                    <div className="text-input">
                        <label htmlFor="movieRating"> Movie Rating </label>
                        <input className="input-style" type="number" name="rating" id="movieRating" min="0" max="10" placeholder="1-10"/>
                    </div>
                    <input className="addMovie-button" type="submit" value="Send"/>
                    {messageOk === false? "" :<p className="confirmation-text">¡User Loaded!</p>}
                </div>
            </form>
            <Link to="/login" className='goBack-button'>Go back</Link>
        </div>
    )
}

export default AddMovie;