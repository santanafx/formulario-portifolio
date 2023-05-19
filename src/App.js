
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import React from 'react';
import { Context } from './context/GlobalContext';
import { PublicRoutes } from './routes/PublicRoutes';

function App() {

  const { autenticar } = React.useContext(Context);

  return (
    <BrowserRouter>
      <Header />
      {autenticar ? console.log('verdadeiro') : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
