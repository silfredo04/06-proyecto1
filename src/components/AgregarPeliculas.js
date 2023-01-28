import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const AgregarPeliculas = ({setListadoState}) => {
    const titulo = "Añadir pelicula";

    const [peliculaState,setPeliculaState] = useState({
        title:'',
        descripcion:''
    });

    // desestructurando un objeto

    const {title,descripcion} = peliculaState;

    const conseguirDatosForm = e =>{
        e.preventDefault();

        // conseguir datos del formulari

        let target = e.target;
        let title = target.title.value;
        let descripcion = target.descripcion.value;

        // crear objeto pelicula
        let pelicula={
            id: new Date().getTime(),
            'title':title,
            'descripcion':descripcion
        };

        // guardar estados
        setPeliculaState(pelicula);
        /* console.log(pelicula); */

        // Actualizar el estado del listado principal lo que hace es agregar un nuevo elemento a un array existente
        setListadoState(elemento =>{
            return [...elemento,pelicula];
        });

        // guardar en el almacenamiento local
        GuardarEnStorage("listapeli",pelicula);
        
    }

  return (
      <>
          <div className="add">
              <h3 className="title">{titulo}</h3>
              <strong>
                {(title && descripcion) && "Has creado la pelicula "+title}
              </strong>
              <form onSubmit={conseguirDatosForm}>
                  <input type="text" 
                         id='title' 
                         placeholder="Titulo" 
                         name="title"/>
                  <textarea id='descripcion' 
                            name='descripcion'
                            placeholder="Descripcion"></textarea>
                  <input type="submit" id='save' value="Guardar" />
              </form>
          </div>
      </>
  )
}
