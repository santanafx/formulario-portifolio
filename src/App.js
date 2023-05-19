
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
