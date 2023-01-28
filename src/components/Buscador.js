import React, { useState } from 'react'

export const Buscador = ({listadoState,setListadoState}) => {
    const titulo = "Buscador"

const [busqueda, setBusqueda] = useState('');
const [noEncontrado, setNoEncontrado] = useState(false);


const buscarPeli = (e) =>{
    // Crear estados y Actualizar
        setBusqueda(e.target.value);
    
    // Filtrar para buscar coincidencias 
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });

        if(busqueda.length <= 1 || pelis_encontradas <= 0){
            pelis_encontradas = JSON.parse(localStorage.getItem("listapeli"));
            setNoEncontrado(true)
        }else{
            setNoEncontrado(false)
        }
    // Actualizar estado del listado principal con lo que e logrado filtrar 
       setListadoState(pelis_encontradas);
} 
  return (
      <>
          <div className="search">
              <h3 className="title">{titulo}: {busqueda}</h3>
              {(noEncontrado == true && busqueda.length > 1) && (
                <span className='no-encontrado'>No se a encontrado ninguna coincidencia</span>
              )}
              <form>
                  <input type="text" 
                         id="search_field"
                         name="busqueda"
                         autoComplete='off'
                         /* value={busqueda} */
                         onChange={buscarPeli}
                   />
                  <button id="search">Buscar</button>
              </form>
          </div>
      </>
  )
}
