import React from 'react'

function Boton({texto, accion}) { 
  return (
    <button className="botonContador" onClick={accion}>{texto}</button>
  )
}

export default Boton
