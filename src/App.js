
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Inicio } from './pages/Inicio';
import { Login } from './pages/Login';
import { Formulario } from './pages/Formulario';
import { Sobre } from './pages/Sobre';


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
