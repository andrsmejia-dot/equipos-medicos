import './Equipo.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Equipo(){
    const {id} = useParams();
    const[equipo, setEquipo] = useState(undefined);

    useEffect(() => {
        fetch(`http://localhost:3000/json/${id}.json`)
            .then((response) => response.json())
            .then((data) => setEquipo(data))
    }, [id]);

    if(!equipo) return null;
    
    return (
        <section className="row">
        <article className="col-lg-1 col-xl-12 margin-all">
            <div className="card text-center">
                <img src= {equipo.imagen} className="card-img-top" alt={equipo.nombre}/>
            </div>
        </article>
        <article className="col-12 margin-all text-center-description">
            <div className="card text-center">
                <div className="card-body">
                    <h4><strong>{equipo.nombre}</strong><i class="fas fa-info-circle"></i></h4>
                    <ul>
                        <p><strong>Riesgo:</strong>  {equipo.riesgo}</p>
                        <p><strong>Fabricante:</strong> {equipo.fabricante}</p>
                        <p><strong>Proveedor:</strong> {equipo.proveedor}</p>
                        <p><strong>Serial:</strong> {equipo.serial}</p>
                        <p><strong>Marca:</strong> {equipo.marca}</p>
                        <p><strong>Modelo:</strong> {equipo.modelo}</p>
                        <p><strong>Riesgo Sanitario:</strong> {equipo.registro_sanitario}</p>
                        <p><strong>Tipo:</strong> {equipo.tipo}</p>
                        <p><strong>Cantidad de consumibles:</strong> {equipo.cantidad_consumibles}</p>
                        <p><strong>Ubicación:</strong> {equipo.ubicacion}</p>
                        <p><strong>Vida Útil:</strong> {equipo.edad_delequipo.vida_util}</p>
                        <p><strong>Tiempo en funcionamiento:</strong> {equipo.edad_delequipo.tiempo_en_funcionamiento}</p>
                        <p><strong>Inicio de Garantía:</strong> {equipo.fecha_compra.inicio_de_garantia}</p>
                        <p><strong>Final de Garantía:</strong> {equipo.fecha_compra.final_de_garantia}</p>
                        <p><strong>Último Mantenimiento:</strong> {equipo.ultimo_mantenimiento}</p>
                        <p><strong>Descripción:</strong> {equipo.descripcion}</p>
                    </ul>
                </div>
            </div>
        </article>
    </section>
    )
}

export default Equipo;