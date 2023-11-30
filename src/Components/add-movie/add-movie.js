//stylesheet

//module packages

//components

function AddMovie() {
    return (
        <div>
            <form action="http://localhost:3000/movies/insertMovie" method="POST">
                <div>
                    <label htmlFor="movieName">Movie Name</label>
                    <input type="text" name="name" id="movieName"/>
                </div>
                <div>
                    <label htmlFor="movieGenre">Movie Genre</label>
                    <select name="genre" id="movieGenre">
                        <option value="Select">Select a Genre</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Science fiction">Science fiction</option>
                        <option value="Suspense">Suspense</option>
                        <option value="Superheros">Superheros</option>
                        <option value="Drama">Drama</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="movieDuration">Movie Duration</label>
                    <input type="number" name="duration" id="movieDuration"/>
                </div>
                <div>
                    <label htmlFor="movieRating"> Movie Rating</label>
                    <input type="number" name="rating" id="movieRating" min="0" max="10"/>
                </div>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default AddMovie;