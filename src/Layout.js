// Página estandar de la Aplicación
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import { Route } from "react-router-dom";

function Layout(props){

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenuLateral = () => {
    setMenuAbierto(!menuAbierto);
  }

    return (
        <>
    <Sidenav 
    open={menuAbierto} 
    menuClickedFunction={toggleMenuLateral}
    >
    </Sidenav>
    <Header menuClickedFunction = {toggleMenuLateral}></Header>
    <main classnNameName="container pt-5">
      <Route {...props} />
    </main>
    {/* Botón para volver arriba */}
    <a href="#"><button id="boton-up"><i classnName="fas fa-sort-up"></i></button></a>
    </>
    );
}

export default Layout;