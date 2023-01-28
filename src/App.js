import {Listado} from './components/Listado';
import {Buscador} from './components/Buscador';
import {AgregarPeliculas} from './components/AgregarPeliculas';
import {Pie} from './components/Pie';
import {BarraNavegacion} from './components/BarraNavegacion';
import {Header} from './components/Header';
import React, { useEffect, useState } from 'react'

function App() {
    const [listadoState,setListadoState] = useState([]);
  return (
    <div className="layout">
        {/* <!-- cabecera --> */}
        <header className="header">
            <Header/>
        </header>
    
        {/* <!-- Barra de navegacion --> */}
            <BarraNavegacion/>
    
        {/* <!--  contenido principal --> */}
        <section className="content">
            {/* <!--  Aqui va el listado de peliculas --> */}
            <Listado
                listadoState = {listadoState}
                setListadoState = {setListadoState}
            />   
        </section>
    
        {/* <!--  Barra lateral --> */}
        <aside className="lateral">
           {/*  buscador  */}
            <Buscador
                listadoState = {listadoState}
                setListadoState = {setListadoState}
            />
            
           {/*  Añadir pelicul */}
            <AgregarPeliculas
                setListadoState = {setListadoState}
            />
        </aside>
    
        {/* <!--  Pie de pagina --> */}
        <footer className="footer">
           <Pie/>
        </footer>
    
    </div>
  );
}

export default App;
