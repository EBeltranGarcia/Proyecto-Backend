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

    const bringMovies = async() => {
        await fetch("http://localhost:3000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>setMovies(data))
        .catch((error)=>{console.log(error)})
    }

    useEffect(()=>{
        bringMovies()
    },[])

    const [show, setShow]= useState(false);

    const showFolder=() => {
        setShow(true)
    }
    
    return (
        <div className="homepage-container">
            <nav className="titleAndLogOut-container">
                <h2>Welcome back!</h2>
            </nav>
            <main className="folders-collage">
                {movies.map((movies)=>{return <MovieFolders key={movies.id} movies={movies}/>})}
            </main> 
            <section>
                <Link className="go-to-addMovie " to="/addMovie">Add Movie</Link>
                <button onClick={showFolder} className="button-deleteMovie" >Delete Movie</button>
                {show === true? <DeleteMovie setShow={setShow} /> : ""}
            </section>   
        </div>
    )
}

export default UserHome;