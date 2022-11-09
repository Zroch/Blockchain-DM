import React, { useEffect } from "react";
import { ethers } from "ethers";
import ABI from '../contract/ABI.json';

function Withdraws() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractAddress = "0xB6F18e0Bb33918B097fDAb2E1679533832F28842"

  
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }

    const withdraw = async () => {
      //let amount = ethers.utils.parseEther(global.config.i18n.valeur)
      const withdrawEth = await contract.withdraw(global.config.i18n.valeur)
      global.config.i18n.valeu = global.config.i18n.valeur.toString();
      console.log(global.config.i18n.valeur)
      await withdrawEth.wait()
    }
    connectWallet()
      .catch(console.error);
    withdraw()
      .catch(console.error);
  })

  return (
    
    <div>
    </div>
  );
}

export default Withdraws;
