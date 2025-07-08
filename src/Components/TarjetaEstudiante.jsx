import React from 'react'

export const TarjetaEstudiante = (estudiante) => {

    const {id, nombre_completo, edad, carrera, promedio_academico}=estudiante
    console.log(estudiante)
  return (
    <div>
        <h5>{id}</h5>
        <h3>nombre:{nombre_completo}</h3>
        <h3>edad:{edad}</h3>
        <h4>carrera:{carrera}</h4>
        <h5>promedio:{promedio_academico}</h5>
    </div>
  )
}
