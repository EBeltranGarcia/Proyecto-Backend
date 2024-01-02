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
    const [resetMoviesEdit, setResetMoviesEdit] = useState(false)

    const bringMovies = async() => {
        await fetch("https://movie-app-37pf.onrender.com/movies")
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

    useEffect (()=>{
        bringMovies()
    },[resetMoviesEdit])

    const showFolder=() => {
        setShow(true)
    }
    
    return (
        <div className="homepage-container">
            <nav className="welcome-container">
                <h2>Welcome to your Gallery!</h2>
            </nav>
            <main className="folders-collage">
                {movies.length === 0 ? <p className="noMovies-container">There are no movies! Go to <b>"Add Movie"</b> to start using your gallery!</p>: 
                movies.map((movies)=> {return <MovieFolders key={movies.id} movies={movies} setResetMoviesEdit={setResetMoviesEdit} resetMoviesEdit={resetMoviesEdit}/>
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