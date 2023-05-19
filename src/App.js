
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Formulario } from './components/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
