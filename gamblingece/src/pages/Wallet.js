import React from "react";
import { NavLink } from "react-router-dom";
import Form from '../scripts/Form';

function Wallet() {
    return (
      <div>
        <div><NavLink to="/" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'black' })}>Home</NavLink></div>
        <div><Form /></div>
      </div>
    );
  }
  
  export default Wallet;