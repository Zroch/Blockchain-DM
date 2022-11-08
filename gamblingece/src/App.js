import React from 'react';
import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Game from './pages/Game';
import Notfound from './pages/Notfound';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<Home />}/>
      <Route exact path="wallet" element={<Wallet />}/>
      <Route exact path="game" element={<Game />}/>
      <Route path="*" element={<Notfound />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;