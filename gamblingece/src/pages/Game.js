import React from "react";
import Jeux from "../composants/Jeux";
import '../css/home.css'
import { NavLink } from "react-router-dom";

function Game() {
    return (
      <div className="back">
        <div><Jeux /></div>
        <div className="box"><NavLink className="navlink" to="/">Rejouez</NavLink></div>
      </div>
    );
  }
  
  export default Game;