import React from 'react'
import '../styles/formStyles.css'

export const FormularioEstudiante = ({cerrar}) => {
  return (
    <div>   
        <h2>Formulario Estudiante</h2>
        
        <form action="" className='formulario-estudiante'>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre"/>
            <label htmlFor="edad">Edad:</label>
            <input type="number" name="edad"/>
            <label htmlFor="carrera">Carrera:</label>
            <input type="text" name="carrera"/>
            <label htmlFor="promedio">Promedio Académico:</label>
            <input type="number" name="promedio"/>
            <button>Guardar</button>
        </form>
        
        <button onClick={cerrar}>cerrar</button>
    </div>
  )
}
