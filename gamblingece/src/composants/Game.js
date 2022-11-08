import React from "react";
import { NavLink } from "react-router-dom";

function Game() {
    return (
      <div>
        <div><NavLink to="/" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'black' })}>Home</NavLink></div>
      </div>
    );
  }
  
  export default Game;