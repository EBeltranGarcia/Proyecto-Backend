//hoja con estilos

//paquetes-modulos
import {BrowserRouter, Routes, Route } from "react-router-dom";
//componentes
import App from "../App";
import LogIn from "../Pages/log-in/log-in";
import AddMovie from "./add-movie/add-movie";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/addMovie" element={<AddMovie/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;