import React, { useState } from 'react'
import '../styles/formStyles.css'

export const FormularioEstudiante = ({cerrar, agregar}) => {

  const [values, setValues] = useState({
    nombre: '',
    edad: '',
    carrera: '',
    promedio: ''
  })

  const handlesubmit = (e)=>{
    e.preventDefault()
    agregar(values)
    setValues({
      nombre:'',
      edad:'',
      carrera:'',
      promedio:''
    })
    cerrar()
  }
  const handlevalues = (e)=>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
    console.log(values)
  }
  return (
    <div>   
        <h2>Formulario Estudiante</h2>
        
        <form action="" className='formulario-estudiante' onSubmit={handlesubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" value={values.nombre} onChange={handlevalues}/>
            <label htmlFor="edad">Edad:</label>
            <input type="number" name="edad" value={values.edad} onChange={handlevalues}/>
            <label htmlFor="carrera">Carrera:</label>
            <input type="text" name="carrera"value={values.carrera} onChange={handlevalues}/>
            <label htmlFor="promedio">Promedio Académico:</label>
            <input type="number" name="promedio" value={values.promedio} onChange={handlevalues}/>
            <button>Guardar</button>
        </form>
        
        <button onClick={cerrar} className='btn-cerrar'>X</button>
    </div>
  )
}
