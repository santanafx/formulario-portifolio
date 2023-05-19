import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../pages/Inicio'
import { Login } from '../pages/Login'
import { Sobre } from '../pages/Sobre'
import { NotFoundPublic } from '../pages/NotFoundPublic'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='*' element={<NotFoundPublic />} />
        </Routes>
    )
}
