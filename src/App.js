
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import React from 'react';
import { Context } from './context/GlobalContext';
import { PublicRoutes } from './routes/PublicRoutes';
import { PrivateRoutes } from './routes/PrivateRoutes';

function App() {

  const { autenticar } = React.useContext(Context);

  return (
    <BrowserRouter>
      <Header />
      {autenticar ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
