import './Tipo.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Tipo(){

    const [imagen, setImagen] = useState([]);
    // Buscar imgs en archivo imgen.json y retirnarlos en la página principal (Simnulando base de datos)
    useEffect(() => {
        fetch("http://localhost:3000/json/imagen.json")
            .then((response) => response.json())
            .then((data) => setImagen(data))
    }, []);

    return (
        <section id="imgs">
            <h1 className= "mb-3" id="tipo">
                <i class="fas fa-charging-station"></i> TIPO <i class="fas fa-cogs"></i>
            </h1>
            <section className="row">
        {/* <!-- imgs --> */}
        {imagen.map(img =>{
            return(
                <article className="col-12 col-md-6 col-lg-2 col-xl-6 margin-all">
                    <div className="card text-center">
                        <Link to={`/tipoequipos/${img.tipo}`}>
                            <img src={img.imagen} className="card-img-top" alt={img.tipo}/>
                            <div className="card-body">
                                <p className="btn btn-light" id="ubicacion">{img.tipo}</p>
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

export default Tipo;