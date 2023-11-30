//stylesheet
import "./user-home.css";
//module packages

//components
import MovieFolders from "../movie-folders/movie-folders";
import { Link } from "react-router-dom";

function UserHome({user, setUser}) {

    const handleLogout = () => {
        setUser([])
    }

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
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
                <MovieFolders/>
            </main> 
            <section className="add-delete-container">
                <button className="probando">Add Movie</button>
                <Link className="probando" to="/addMovie">Hola</Link>
            </section>   
        </div>
    )
}

export default UserHome;