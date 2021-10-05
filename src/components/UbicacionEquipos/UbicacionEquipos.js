import './UbicacionEquipos';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UbicacionEquipos(){
    const {ubicacion} = useParams();
    const[equipos, setEquipo] = useState(undefined);

    useEffect(() => {
        fetch(`http://localhost:3000/json/${ubicacion}.json`)
            .then((response) => response.json())
            .then((data) => setEquipo(data))
    }, [ubicacion]);

    if(!equipos) return null;

    return(
        <section id="equipos">
            <h1 className= "mb-3" id="tipo">
            <p id="titulo-pagina"><i className="fas fa-hospital-alt"></i>{ubicacion}</p>
            </h1>
            <section className="row">
        {/* <!-- equipos --> */}
        {equipos.map(equipo =>{
            return(
                <article className="col-12 col-md-6 col-lg-4 col-xl-3 margin-all">
                    <div className="card text-center">
                        <img src={equipo.imagen} className="card-img-top" alt={equipo.nombre}/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{equipo.nombre}</strong></h5>
                            <h5 className="card-title"><i>MARCA:</i> {equipo.marca}</h5>
                            <h5 className="card-title"><i>TIPO:</i> {equipo.tipo}</h5>
                            <h5 className="card-title"><i>MODELO:</i> {equipo.modelo}</h5>
                            <Link to={`/equipo/${equipo.id}`} classNameName="boton-link">
                                <p className="btn btn-light">INFORMACIÓN <i className="far fa-file-alt"></i></p>
                            </Link>
                        </div>
                    </div>
                </article>
            )
        })}
        </section>
    </section>
    );
}

export default UbicacionEquipos;