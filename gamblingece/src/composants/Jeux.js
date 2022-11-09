import React from 'react';
import CoinFlip from '../scripts/CoinFlip';
import Solde from './Solde';
import '../css/home.css';
 
const Jeux=()=> {
  return (
    <div>
      <CoinFlip />
      <Solde />
    </div>
  );
}
 
export default Jeux;