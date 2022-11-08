import React from "react";
import { NavLink } from "react-router-dom";

function Wallet() {
    return (
      <div>
        <div><NavLink to="/" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'black' })}>Home</NavLink></div>
      </div>
    );
  }
  
  export default Wallet;