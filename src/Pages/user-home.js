//stylesheet
import "./user-home.css";
//module packages
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//components
import MovieFolders from "../Components/movie-folders/movie-folders";
import DeleteMovie from "../Components/delete-movie/delete-movie";


function UserHome() {

    const [movies,setMovies] = useState([]);
    const [show, setShow]= useState(false);
    const [resetMovies, setResetMovies] = useState(false)

    const bringMovies = async() => {
        await fetch("http://localhost:3000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>setMovies(data))
        .catch((error)=>{console.log(error)})
    }
    
    useEffect(()=>{
        bringMovies()
    },[])

    useEffect (()=>{
        bringMovies()
    },[resetMovies])

    const showFolder=() => {
        setShow(true)
    }
    
    return (
        <div className="homepage-container">
            <nav className="welcome-container">
                <h2>Welcome to your Gallery!</h2>
            </nav>
            <main className="folders-collage">
                {movies.map((movies)=>{
                    if (movies.length === 0) {
                        return <p>No hay peliculas</p>
                    } else {
                        return <MovieFolders key={movies.id} movies={movies}/>
                    }
                    
                    })}
            </main> 
            <section>
                <Link className="go-to-addMovie " to="/addMovie">Add Movie</Link>
                <button onClick={showFolder} className="button-deleteMovie" >Delete Movie</button>
                {show ? <DeleteMovie setShow={setShow} setResetMovies={setResetMovies} resetMovies={resetMovies} /> : ""}
            </section>   
        </div>
    )
}

export default UserHome;