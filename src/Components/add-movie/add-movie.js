//stylesheet
import "./add-movie.css"
//module packages
import { Link } from 'react-router-dom';
import { useState } from "react";
//components

function AddMovie() {

    const[messageOk,setMessageOk]= useState(false)

    const loadMovie = async (event) => {

        event.preventDefault();

        const formInfo= new FormData(event.target)

        formInfo.append("image",event.target[4].value)

        await fetch("http://localhost:3000/movies/insertMovie",{
            method: "post",
            body: formInfo
        })
        .then((resp)=>{return resp.json})
        //.then((res)=>console.log(res))
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
                        <input className="input-style" type="text" name="name" id="movieName" required/>
                    </div>
                    <div className="text-input">
                        <label htmlFor="movieGenre">Movie Genre </label>
                        <select className="input-style" name="genre" id="movieGenre" required>
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
                    </div>
                    <div className="text-input">
                        <label htmlFor="movieDuration">Movie Duration </label>
                        <input className="input-style" type="number" name="duration" id="movieDuration" min="0" max="300" placeholder="In minutes" required/>
                    </div>
                    <div className="text-input">
                        <label htmlFor="movieRating"> Movie Rating </label>
                        <input className="input-style" type="number" name="rating" id="movieRating" min="0" max="10" placeholder="1-10" required/>
                    </div>
                    <div className="text-input">
                        <label htmlFor="moviePoster"> Movie Poster </label>
                        <input className="input-style" type="file" name="image" id="moviePoster" required/>
                    </div>
                    <input className="addMovie-button" type="submit" value="Send"/>
                    {messageOk === false? "" :<p className="confirmation-text">¡Movie Loaded!</p>}
                </div>
            </form>
            <Link to="/home" className='goBack-button'>Go back</Link>
        </div>
    )
}

export default AddMovie;