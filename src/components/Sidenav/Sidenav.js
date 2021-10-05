import "./Sidenav.css";
import { Link } from "react-router-dom";

function Sidenav({ open, menuClickedFunction }){
    return (
    <nav id="menu-principal-sidenav" className={open ? 'open': ''}>
        <button
        id="boton-cerrar-menu" 
            className="boton-icono" 
            onClick={() => menuClickedFunction()}>
            <i className="fas fa-times"></i>
        </button>
        <ul id="menus">
            <li>
                <Link to="/equipos">
                    <i class="fas fa-toolbox"></i> EQUIPOS
                </Link>
            </li>
            <li>
                <Link to="/tipo">
                    <i class="fas fa-signature"></i> TIPO
                </Link>
            </li>
            <li>
                <Link to="/ubicacion">
                    <i class="far fa-hospital"></i> UBICACIÓN
                </Link>
            </li>
        </ul>
    </nav>
    );
}

export default Sidenav;