import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Formulario } from '../pages/Formulario'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/formulario' element={<Formulario />} />
    </Routes>
  )
}
