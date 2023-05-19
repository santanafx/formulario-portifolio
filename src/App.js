
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { Sobre } from './components/Sobre';
import { Login } from './components/Login';
import { Inicio } from './components/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/Sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
