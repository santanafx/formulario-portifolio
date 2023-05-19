import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Formulario } from '../pages/Formulario'

export const PrivateRoutes = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/formulario');
  }, [])

  return (
    <Routes>
      <Route path='/formulario' element={<Formulario />} />
    </Routes>
  )
}
