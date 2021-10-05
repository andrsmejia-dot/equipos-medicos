import { Link } from "react-router-dom";
import './Header.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Header({ menuClickedFunction}){
    const { user, setUser } = useContext(UserContext);

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
            <li>
            {!user.isLoggedIn ? (
                <Link to = "/login">
                    <button id="boton-usuarios" className="boton-icono-usuarios"><i class="fas fa-user-md"></i></button>
                </Link>
            ) : (
                <button
                id="boton-usuarios"
                onClick={() => setUser({ isLoggedIn: false })}
                className="boton-icono-usuarios"
                >
                <i className="fas fa-sign-out-alt"></i>
                </button>
            )}
            </li>
            </div>
        </div>
    );
}

export default Header;