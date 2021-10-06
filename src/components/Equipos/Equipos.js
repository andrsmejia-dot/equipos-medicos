import "./Equipos.css";
import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import configData from "../../config.json";

function Equipos() {
    const [equipos, setEquipos] = useState([]);
    const { user } = useContext(UserContext);
    const history = useHistory();

    const cargarEquipos = async () => {
        fetch(`${configData.SERVER_URL}/equipos-medicos`)
          .then((response) => response.json())
          .then((data) => setEquipos(data));
      };
    const eliminarEquipo = async (id) => {
    return fetch(`${configData.SERVER_URL}/equipos-medicos/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    })

    .then((response) => response.json())
      .then(() => {
        // el equipo se eliminó exitosamente
        // refrescar el componente de equipos
        // de lista de equipos eliminar el elemento
        // volver a consumir el servicio de consulta de equipos
        cargarEquipos();
      });
  };
    useEffect(() => {
        cargarEquipos();
    }, []);

    // Buscar equipos en archivo equipos.json y retirnarlos en la página principal (Simnulando base de datos)
    useEffect(() => {
        fetch("http://localhost:3000/json/equipos.json")
            .then((response) => response.json())
            .then((data) => setEquipos(data))
    }, []); // Los que encuentra los alamacena en lista

    return (
        <section id="equipos">
            <h1 className= "mb-3">
                <i className="fas fa-hospital-alt"></i> Equipos 
            
                {user.isLoggedIn ? (
                <button
                id="boton-crear-equipo"
                className="boton-icono"
                title="Crear equipo"
                onClick={() => history.push("/guardar-equipo")}
                >
                <i className="fas fa-plus-circle"></i>
                </button>
                ) : null}
            </h1>
            <section className="row">
        {/* <!-- equipos --> */}
        {equipos.map((equipo) =>{
            return(
                <article className="col-12 col-md-6 col-lg-4 col-xl-3 margin-all" key={equipo.id}>
                    <div className="card text-center">
                        <img src={equipo.imagen} className="card-img-top" alt={equipo.nombre}/>
                        <div className="card-body">
                            <h5 className="card-title" key={equipo.id}><strong>{equipo.nombre}</strong></h5>
                            <h5 className="card-title" key={equipo.marca}><i>MARCA:</i> {equipo.marca}</h5>
                            <h5 className="card-title" key={equipo.tipo}><i>TIPO:</i> {equipo.tipo}</h5>
                            <h5 className="card-title" key={equipo.modelo}><i>MODELO:</i> {equipo.modelo}</h5>
                            <Link to={`/equipo/${equipo.id}`} className="boton-link">
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

export default Equipos;