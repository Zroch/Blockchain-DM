import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import ABI from '../contract/ABI.json';

function Withdraw() {
  const [balance, setBalance] = useState()
  const [withdrawValue, setWithdrawValue] = useState('')

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractAddress = "0xB6F18e0Bb33918B097fDAb2E1679533832F28842"

  
  const contract = new ethers.Contract(contractAddress, ABI, signer);

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

  const handleWithdrawChange = (e) => {
    setWithdrawValue(e.target.value);
  }

  const handleWithdrawSubmit = async (e) => {
    e.preventDefault()
    console.log(withdrawValue)
    let amount = ethers.utils.parseEther(withdrawValue)
    amount = amount.toString();
    const withdrawEth = await contract.withdraw(amount)
    await withdrawEth.wait()
    const balance = await provider.getBalance(contractAddress)
    console.log('balance', balance)
    const balanceFormatted = ethers.utils.formatEther(balance)
    setBalance(balanceFormatted);
  }
  return (
    <div className="container">
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm">
            <h3>Welcome</h3>
            <p>Your Balance: {balance} ETH et {global.config.i18n.valeur}</p>
          </div>
          <div className="col-sm">
            <form className="mt-5" onSubmit={handleWithdrawSubmit}>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="0" value={withdrawValue} onChange={handleWithdrawChange} />
              </div>
              <button type="submit" className="btn btn-dark mt-3">Withdraw</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
