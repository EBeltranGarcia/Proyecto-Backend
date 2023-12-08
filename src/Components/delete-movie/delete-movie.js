//stylesheet
import "./delete-movie.css"
//module packages

//components


function DeleteMovie({setShow}) {
    return(
        <div className="deleteMovie-container">
            <button onClick={()=> setShow(false)}>Cerrar </button>
        </div>
    )
}

export default DeleteMovie;