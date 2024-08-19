import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import Adote from './rotas/Adote';
import Voluntarie from './rotas/Voluntarie';
import Animal from './rotas/Animal';
import Administração from './rotas/Administracao';
import { createGlobalStyle, styled } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Autorizacao from './componentes/Autorizacao';



const GlobalStyle = createGlobalStyle`
  li{
    list-style: none;
  }
  a{
    color: black;
    text-decoration: none !important;
    :hover{
        font-weight: bold;
    }
  }
`
const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%);
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adote" element={<Adote />} />
          <Route path="/voluntarie" element={<Voluntarie />} />
          <Route path="/login" element={<Autorizacao />} />
          <Route path="/administracao" element={<Administração />} />
          <Route path="/adote/:animalNome" element={<Animal />} />
        </Routes>
        <Footer />
      </AppContainer>

    </BrowserRouter>

  </React.StrictMode>
);
