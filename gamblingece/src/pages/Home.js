import React from "react";
import { NavLink } from "react-router-dom";
import '../css/home.css';


function Home() {
    return (
      <div className="back">
        <div>
        <h1 className="bvn">Bienvenue dans le jeu de la pièce !</h1>
        <h3 className="deux">Parier sur une face, si vous gagner vous récupérez le double de votre mise.</h3>
        <div className="box"><NavLink className="navlink" to="wallet">Wallet</NavLink></div>
        </div>
      </div>
    );
  }
  
  export default Home;