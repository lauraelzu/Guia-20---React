import React, { useEffect, useState } from 'react'

export default function Buscador () {
    const [id, setId] = useState(1)
    const [personajeUnico, setPersonajeUnico]=useState({})
    const url = "https://rickandmortyapi.com/api/character"

    //se llama a la API con un id para buscar un personaje específico 
    async function getPersonajeById(id){
        const response = await fetch(`${url}/${id}`);
        const data = await response.json()

        setPersonajeUnico(data)
    }

    //useEffect estará atento cuando cambie el id renderizará el componente nuevamente
    useEffect(()=>{getPersonajeById(id);},[id])

    //funcion buscar, recibe un evento e, setea el id con el valor de input (target: elemento html que invoca a la fc)
    const buscar = (e) => {
        setId(e.target.value)
    }

   //onBlur --> cuando pierde foco el input llame la función buscar
  return (
    <div className='buscador'>
      <form>
        <h2>Buscar un personaje por su ID</h2>
        <h6>(Luego hacer clic en cualquier parte de la página)</h6>
        <input className="buscadorInput" onBlur={buscar} placeholder='Ingrese el ID'></input>
      </form>
      <div>
        <div style={{margin: "20px"}}> {/*estilos en linea en React (objeto) */}
          <div>{`Nombre: ${personajeUnico.name}`}</div>
          <div>{`ID: ${personajeUnico.id}`}</div>
          <div>{`Estado: ${personajeUnico.status}`}</div>
        </div>   
        <div>
          <img src={personajeUnico.image} alt={"imagen del personaje"}/>
        </div>
      </div>
    </div>
  )
}


