import React from 'react'

export const TarjetaEstudiante = (estudiante) => {

    const {id, nombre, edad, carrera, promedio}=estudiante
    console.log(estudiante)
  return (
    <div>
        <h5>{id}</h5>
        <h3>nombre: {nombre}</h3>
        <h3>edad: {edad}</h3>
        <h4>carrera: {carrera}</h4>
        <h5>promedio: {promedio}</h5>
    </div>
  )
}
