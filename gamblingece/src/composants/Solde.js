import { ethers } from 'ethers';
import React, { useState, useEffect } from "react";
import '../css/home.css';

function Solde() {
    const [balance, setBalance] = useState()  
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contractAddress = "0xB6F18e0Bb33918B097fDAb2E1679533832F28842";

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }

    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress)
      const balanceFormatted = ethers.utils.formatEther(balance)
      setBalance(balanceFormatted);
    }

    connectWallet()
      .catch(console.error);

    getBalance()
      .catch(console.error);
  })

    return(
        
      
        <h4 className="solde">La banque possède : {balance} de ETH</h4>
        
        
    )

}

export default Solde;