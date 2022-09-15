import logo from '../logo.svg';
import '../App.css';
import React, { useState } from 'react';
import Boton from '../componentes/Boton';


export default function Main() {
  const [cantidad, setCantidad] = useState(0)  
 
  function sumar(){
   setCantidad(cantidad+1)  
  }
  function restar(){
    setCantidad(cantidad-1)  
  }
  return (
    <>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p> Ejemplo prueba </p>
        <br></br>
        <Boton accion={sumar} texto={"Sumar"}></Boton> 
        <h3>{cantidad}</h3>
        <Boton accion={restar} texto={"Restar"}></Boton> 
      </>
  )
}



