//stylesheet
import "./user-home.css";
//module packages

//components
import MovieFolders from "../movie-folders/movie-folders";

function UserHome({user, setUser}) {

    const handleLogout = () => {
        setUser([])
    }

    return (
        <div className="holake">
            <nav className="titleAndLogOut-container">
                <h2>Welcome back! {user}</h2>
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
                <button className="probando">Delete Movie</button>
            </section>   
        </div>
    )
}

export default UserHome;