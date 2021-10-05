import './App.css';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Equipos from './components/Equipos/Equipos';
import Layout from './Layout';
import Equipo from './components/Equipo/Equipo';
import Tipo from './components/Tipo/Tipo';
import TipoEquipos from './components/TipoEquipo/TipoEquipos';
import Ubicacion from './components/Ubicacion/Ubicacion';
import UbicacionEquipos from './components/UbicacionEquipos/UbicacionEquipos';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Layout path ="/equipos">
          <Equipos/>
        </Layout>
        {/* Información de equipos */}
        <Layout path = "/equipo/:id">
          <Equipo/>
        </Layout>
        {/* Buscando por tipo de equipo */}
        <Layout path ="/tipo">
          <Tipo/>
        </Layout>
        <Layout path = "/tipoequipos/:tipo">
          <TipoEquipos/>
        </Layout>
        {/* Buscando por ubicación */}
        <Layout path ="/ubicacion">
          <Ubicacion/>
        </Layout>
        <Layout path ="/ubicacion/:ubicacion">
          <UbicacionEquipos/>
        </Layout>
        {/* Raiz, al copiar localhost:3000 */}
        <Layout exact path ="/">
          <Equipos/>
        </Layout>
      </Switch>
    </Router>
    {/* Botón para volver arriba */}
    <a href="#"><button id="boton-up"><i class="fas fa-sort-up"></i></button></a>
    <footer class="d-grid margin-all">
        <a href="#" class="btn btn-outline-success" role="button" id="marca-final">WebDevTech &copy; 2021</a>
    </footer>
    </>
  );
}

export default App;
