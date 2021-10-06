import './App.css';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Equipos from './components/Equipos/Equipos';
import Layout from './Layout';
import Equipo from './components/Equipo/Equipo';
import Tipo from './components/Tipo/Tipo';
import TipoEquipos from './components/TipoEquipo/TipoEquipos';
import Ubicacion from './components/Ubicacion/Ubicacion';
import UbicacionEquipos from './components/UbicacionEquipos/UbicacionEquipos';
import Login from './components/Login/Login';
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import GuardarEquipo from './components/GuardarEquipo/GuardarEquipo';

function App() {

  const userStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(
    userStorage ? userStorage : { isLoggedIn: false }
  );
  
  return (
    <>
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Layout path ="/equipos">
            <Equipos/>
          </Layout>
          {/* Información de equipos */}
          <Layout path = "/equipo/:id">
            <Equipo/>
          </Layout>
          {/* User */}
          <Layout path ="/login">
            <Login/>
          </Layout>
          {/* Guardando nuevo equipo */}
          <Layout path="/guardar-equipo/:id?">
            <GuardarEquipo />
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
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
