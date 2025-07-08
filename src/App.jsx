import React, { useState } from 'react'
import { estudiantes } from './utils/datos'
import { ListaEstudiantes } from './Components/ListaEstudiantes'
import "./styles/cardStyle.css"

export const App = () => {
    const[studentData, setStudentData ] = useState(estudiantes)
  return (
    <div><ListaEstudiantes dataStudent= {studentData}/></div>
  )
}
