//stylesheet
import "./movieInfo.css";
//module packages

//components

function MovieInfo({genre,duration,rating,id,setShow}) {

    
    return (
        <div className="movieInfo-container">
            <section className="infoId-container">
                <h5>Movie id: {id}</h5>
            </section>
            <ul>
                <li className="list-container">
                    <h4 className="info-tittle">Genre:</h4>
                    <p>{genre}</p>
                </li>
                <li className="list-container">
                    <h4 className="info-tittle">Duration:</h4>
                    <p>{duration} min</p>
                </li>
                <li className="list-container"> 
                    <h4 className="info-tittle">Rating:</h4>
                    <p>{rating}/10</p>
                </li>    
            </ul>
            <button className="close-button" onClick={()=> setShow(false)}>Close</button>
        </div>
    )
}

export default MovieInfo;