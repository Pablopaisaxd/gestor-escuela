import React from 'react'

export const Formularios = () => {
  return (
    <div>
        <form className='formulario'>
            <h2>Formulario de Registro</h2>
            <label htmlFor="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required />
    
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" name="edad" required />
    
            <label htmlFor="carrera">Carrera:</label>
            <input type="text" id="carrera" name="carrera" required />
    
            <label htmlFor="promedio">Promedio Académico:</label>
            <input type="number" id="promedio" name="promedio"  required />
    
            <button type="submit">Registrar Estudiante</button>
        </form>
    </div>
  ) 
}

