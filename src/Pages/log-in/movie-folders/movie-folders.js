//stylesheet
import "./movie-folders.css"
//module packages
import { useState } from "react";
//components
import MovieInfo from "../../../Components/movieInfo";

function MovieFolders() {

    const [show, setShow]= useState(false);

    const showFolder=() => {
        setShow(true)
    }


    return (
        <div className={show === true? "folder-container2":"folder-container"}>
            <div>
                <img className={show === true? "folder-image2": "folder-image"} src="./assets/imagen-prueba-2.jpg" alt= "Imagen a prueba"/>
                <h4 className={show === true? "movie-tittle2": "movie-tittle"}>spiderman lorem into the spiderverse</h4>
                <button className={show === true? "folder-button2":"folder-button"} onClick={showFolder}>See More</button>
            </div>
            {show === true? <MovieInfo setShow={setShow}/>: ""}
        </div>
    )
}

export default MovieFolders;