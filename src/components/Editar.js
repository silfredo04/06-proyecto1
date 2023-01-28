import React from 'react'

export const Editar = ({nuevo,conseguirPeliculas,setEditar,setListadoState}) => {
    
    const titulo_componente = "Editar Pelicula";

    const guardarEdicion = (e, id) =>{
        e.preventDefault();
        // conseguir el target del evento 
        let target = e.target;
        
        // buscar el indice del objeto de la pelicula a actualizar

        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(nuevo => nuevo.id === id)

        // Crear objeto con ese id de ese indice, con titulo y descripcion del formulario

        let peli_actualizar = {
            id,
            title: target.titulo.value,
            descripcion:target.descripcion.value
        }

        // actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizar;
        console.log(pelis_almacenadas);
        
        // guardar el nuevo array de objetos en el localstorage
        localStorage.setItem("listapeli",JSON.stringify(pelis_almacenadas));

        // y actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }
  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componente}: {nuevo.title}</h3>
        <form onSubmit={e => guardarEdicion(e, nuevo.id)}>
            <input type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue={nuevo.title}
            />
            <textarea name="descripcion"
                      defaultValue= {nuevo.descripcion}
                      className='Descripcion_editada'
            />  
            <input type="submit" className="editar" value="Actualizar"/> 
        </form> 
    </div>
  )
}
