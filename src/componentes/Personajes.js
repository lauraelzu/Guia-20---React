import React, { useEffect, useState } from 'react'

//la API externa devuelve un array de personajes, useState se inicializa con array vacío que se llenará cuando se consuma la API 
export default function Personajes () {
    
    const [personajes, setPersonajes]= useState([])


    //FETCH A UNA API EXTERNA, trae datos para usarlos en esta app
    const url = "https://rickandmortyapi.com/api/character"

    //funcion async porque se debe manejar la demora en la obtención de la info de la API, si no la App tira el error Undefined
    async function getApi(){
        const response = await fetch(url);
        const data = await response.json()

        setPersonajes(data.results)
    }

    useEffect(() => {getApi();}, [])

    //En "mostrar" se guarda lo que retorna el método .MAP de JS
    //que recibe cada personaje del array personajes, devolviendo un div que contiene un div por cada atributo que se necesite del personaje
    const mostrar = personajes.map(
        (personaje) =>
        <div style={{margin: "20px"}}>
            <div style={{margin: "20px"}}>
                <div>{`Nombre: ${personaje.name}`}</div>
                <div>{`ID: ${personaje.id}`}</div>
                <div>{`Estado: ${personaje.status}`}</div>
            </div>
            <div>
                <img src={personaje.image} alt={"imagen del personaje"}/>
            </div>
        </div>
    )

    return(
        <div className="listadoPersonajes">{mostrar}</div>
    )

}

