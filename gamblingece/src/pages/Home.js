import React from "react";
import { NavLink } from "react-router-dom";
import Solde from '../composants/Solde';

function Home() {
    return (
      <div>
        <div><NavLink to="wallet" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'black' })}>Wallet</NavLink></div>
        <div><NavLink to="game" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'black' })}>Jouer</NavLink></div><h1>Home</h1>
        <div><Solde /></div>
      </div>
    );
  }
  
  export default Home;