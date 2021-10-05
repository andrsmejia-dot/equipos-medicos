import './Ubicacion.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Ubicacion(){
    const [ubicaciones, setUbicacion] = useState([]);
    // Buscar Ubicacion en archivo ubicación.json y retirnarlos en la página principal (Simnulando base de datos)
    useEffect(() => {
        fetch("http://localhost:3000/json/ubicaciones.json")
            .then((response) => response.json())
            .then((data) => setUbicacion(data))
    }, []);

    return (
        <section id="ubicacion">
            <h1 className= "mb-3" id="tipo">
                UBICACIONES <i className="far fa-hospital"></i>
            </h1>
            <section className="row">
        {/* <!-- Ubicacion --> */}
        {ubicaciones.map(ubica =>{
            return(
                <article className="col-12 col-md-6 col-lg-4 col-xl-3 margin-all">
                    <div className="card text-center">
                        <Link to={`/tipoequipos/${ubica.ubicacion}`}>
                            <img src={ubica.imagen} className="card-ubicacion-top" alt={ubica.ubicacion}/>
                            <div className="card-body">
                                <p className="btn btn-light" id="ubicacion">{ubica.ubicacion}</p>
                            </div>
                        </Link>
                    </div>
                </article>
            )
        })}
        </section>
    </section>
    );
}

export default Ubicacion;