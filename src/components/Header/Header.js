import { Link } from "react-router-dom";
import './Header.css'

function Header({ menuClickedFunction}){
    return (
        // -------------------------Header of the App--------------------------------------
        <div className="container-header">
            {/* Tittle */}
            <div className="container-titulo">
                <a href="/" className="title">WebDevTech</a>
            </div>
            {/* Menu Button */}
            <div className="container-menu">
                <button id="boton-menu-principal" className="boton-icono" onClick={() => menuClickedFunction()}><i className="fas fa-bars"></i></button>
            </div>
            {/* Users Button */}
            <div className="container-usuario">
                <button id="boton-usuarios" className="boton-icono-usuarios"><i class="fas fa-user-md"></i></button>
            </div>
        </div>
    );
}

export default Header;