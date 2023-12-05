//stylesheet
import "./user-home.css";
//module packages
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//components
import MovieFolders from "../../../Components/movie-folders/movie-folders";


function UserHome({user, setUser}) {

    const handleLogout = () => {
        setUser([])
    }

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
    
    return (
        <div className="homepage-container">
            <nav className="titleAndLogOut-container">
                <div className="user-message-container">
                    <h2>Welcome back!</h2>
                    <h2 id="username">{user}</h2>
                </div>    
                <button onClick={handleLogout} className="logOut-button">Log Out</button>
            </nav>
            <main className="folders-collage">
                {movies.map((movies)=>{return <MovieFolders key={movies.id} movies={movies}/>})}
            </main> 
            <section>
                <Link className="go-to-addMovie " to="/addMovie">Add Movie</Link>
            </section>   
        </div>
    )
}

export default UserHome;