import React from "react";
import { NavLink } from "react-router-dom";
import Form from '../scripts/Form';
import '../css/home.css';
import Solde from '../composants/Solde';

function Wallet() {
    return (
      <div className="back">
        <div className="form"><h1 className="bvn">Bienvenue dans le jeu de la pièce !</h1>
        <h3 className="deux">Parier sur une face, si vous gagner vous récupérez le double de votre mise.</h3>
        <Form />
        </div>
        <div className="box"><NavLink className="navlink" to="/game">Jouer</NavLink></div>
        <div className="centrer"><Solde /></div>
      </div>
    );
  }
  
  export default Wallet;