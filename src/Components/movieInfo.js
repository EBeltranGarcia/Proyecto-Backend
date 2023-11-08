//stylesheet
import "./movieInfo.css";
//module packages

//components

function MovieInfo({setShow}) {

    
    return (
        <div>
            <ul>
                <li className="list-container">
                    <h4 className="info-tittle">Genre:</h4>
                    <p>andsispan</p>
                </li>
                <li className="list-container">
                    <h4 className="info-tittle">Duration:</h4>
                    <p>a lot</p>
                </li>
                <li className="list-container"> 
                    <h4 className="info-tittle">Rating:</h4>
                    <p>10/10</p>
                </li>    
            </ul>
            <button onClick={()=> setShow(false)}>Close</button>
        </div>
    )
}

export default MovieInfo;