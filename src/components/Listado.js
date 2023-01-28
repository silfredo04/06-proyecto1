import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState,setListadoState}) => {

    //const [listadoState,setListadoState] = useState([]);

    const [editar,setEditar] = useState(0);

    useEffect(() =>{
        console.log("Componentes del listado de peliculas cargado!!");
        conseguirPeliculas();
    },[]);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("listapeli"));
        console.log(peliculas);
        setListadoState(peliculas);
        return peliculas;
    };

    const borrarPelicula = (id) =>{
        // Conseguir la pelicula almacenadas 

        let peliculas_almacenadas = conseguirPeliculas();


        // Filtrar esas peliculas para que elimine del array la que no quiero

        let nuevo_array_peliculas = peliculas_almacenadas.filter(pelicula => pelicula.id !== parseInt(id));


        // Actualizar estado del listado
        setListadoState(nuevo_array_peliculas);

        //Actualizar los datos en el localStorage
        localStorage.setItem('listapeli',JSON.stringify(nuevo_array_peliculas));
    }

  return (
      <>
      {listadoState != null ? 
            listadoState.map(nuevo => {
            return(
                <article key={nuevo.id} className="peli-item">
                <h3 className="title">{nuevo.title}</h3>
                <p className="description">{nuevo.descripcion}</p>

                <button className="edit" onClick={ () => setEditar(nuevo.id)}>Editar</button>
                <button className="delete" onClick={() => borrarPelicula(nuevo.id)}>Borrar</button>

                {/* Aparece formulario Editar*/}
                {editar === nuevo.id && (
                    <Editar 
                    nuevo={nuevo}
                    conseguirPeliculas={conseguirPeliculas}
                    setEditar={setEditar}
                    setListadoState={setListadoState}
                    />
                )}
            </article>
            );
        })
        :
        <h2>No hay peliculas para mostrar</h2>
     }
      </>
  )
}
