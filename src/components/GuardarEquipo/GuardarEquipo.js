import "./GuardarEquipo.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import configData from "../../config.json";

function GuardarEquipo() {
  const guardarEquipo = async (equipo, idEquipo) => {
    let url = `${configData.SERVER_URL}/equipos-medicos`;
    if (idEquipo) {
      url = url + "/" + idEquipo;
    }
    delete equipo._id;
    return fetch(url, {
      method: idEquipo ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipo),
    }).then((response) => response.json());
  };

  const formReducer = (state, data) => {
    if (data.isEvent) {
      return {
        ...state,
        [data.name]: data.value,
      };
    }
    return {
      ...data,
    };
  };

  const { id } = useParams();
  const [formData, setFormData] = useReducer(formReducer, {
    nombre: "",
    riesgo: "",
    fabricante: "",
    proveedor: "",
    serial: "",
    marca: "",
    modelo: "",
    registro_sanitario: "",
    tipo: "",
    cantidad_consumibles: "",
    ubicacion: "",
    ultimo_mantenimiento: "",
    descripcion: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`${configData.SERVER_URL}/equipos-medicos/${id}`)
        .then((response) => response.json())
        .then((data) => setFormData(data));
    }
  }, [id]);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
      isEvent: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    guardarEquipo(formData, id).then(() => {
      console.log("el equipo se guardó exitosamente");
      console.log(id);
      if (!id) {
        setFormData({
            nombre: "",
            riesgo: "",
            fabricante: "",
            proveedor: "",
            serial: "",
            marca: "",
            modelo: "",
            registro_sanitario: "",
            tipo: "",
            cantidad_consumibles: "",
            ubicacion: "",
            ultimo_mantenimiento: "",
            descripcion: "",
        });
      }
    });
  };

  return (
    <>
      <h1 className="mb-5">
        Guardar Equipo <i class="far fa-folder"></i>
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre equipo"
            name="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRiesgo">
          <Form.Label>Riesgo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Riesgo equipo"
            name="Riesgo"
            onChange={handleChange}
            value={formData.riesgo}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFabricante">
          <Form.Label>Fabricante</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fabricante equipo"
            name="Fabricante"
            onChange={handleChange}
            value={formData.fabricante}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupProveedor">
          <Form.Label>Proveedor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Proveedor equipo"
            name="Proveedor"
            onChange={handleChange}
            value={formData.proveedor}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSerial">
          <Form.Label>Serial</Form.Label>
          <Form.Control
            type="text"
            placeholder="Serial equipo"
            name="Serial"
            onChange={handleChange}
            value={formData.serial}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMarca">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marca equipo"
            name="Marca"
            onChange={handleChange}
            value={formData.marca}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupModelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Modelo equipo"
            name="Modelo"
            onChange={handleChange}
            value={formData.modelo}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRegistroSanitario">
          <Form.Label>Registro sanitario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Registro sanitario equipo"
            name="Registro_sanitario"
            onChange={handleChange}
            value={formData.registro_sanitario}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripcion del equipo"
            name="descripcion"
            onChange={handleChange}
            value={formData.descripcion}
          />
        </Form.Group>
        <Row>
          <Form.Group
            as={Col}
            lg="4"
            className="mb-3"
            controlId="formGroupTipo"
          >
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tipo de equipo"
              name="tipo"
              onChange={handleChange}
              value={formData.tipo}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            sm="12"
            md="6"
            lg="4"
            className="mb-3"
            controlId="formGroupCalificacion"
          >
            <Form.Label>Cantidad consumibles</Form.Label>
            <Form.Control
              type="number"
              step="1"
              placeholder="Cantidad de consumibles"
              name="cantidad_consumibles"
              onChange={handleChange}
              value={formData.cantidad_consumibles}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGroupImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Imagen del equipo"
              name="imagen"
              onChange={handleChange}
              value={formData.imagen}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-4" controlId="formGroupUbicacion">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ubicación equipo"
            name="ubicacion"
            onChange={handleChange}
            value={formData.ubicacion}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupMantenimiento">
          <Form.Label>Ultimo mantenimiento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ultimo mantenimiento equipo"
            name="ultimo_mantenimiento"
            onChange={handleChange}
            value={formData.ultimo_mantenimiento}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Equipo
        </Button>
      </Form>
    </>
  );
}

export default GuardarEquipo;