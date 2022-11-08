import React from "react";
import { NavLink } from "react-router-dom";
import Withdraw from "../scripts/Withdraw";
import Jeux from "../composants/Jeux";

function Game() {
    return (
      <div>
        <div><NavLink to="/" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'black' })}>Home</NavLink></div>
        <div><Jeux /></div>
        <div><Withdraw /></div>
      </div>
    );
  }
  
  export default Game;