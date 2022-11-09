import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage.js";
import TxList from "./TxList";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to: "0xB6F18e0Bb33918B097fDAb2E1679533832F28842",
      value: ethers.utils.parseEther(ether)
    });
    global.config.i18n.valeur = parseFloat(global.config.i18n.valeur) + parseFloat(ether);
    console.log(parseFloat(ether))
    console.log(global.config.i18n.valeur)
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <div  className="centrer">
    <form onSubmit={handleSubmit}>
      <div>
        <main>
          <h1>
            Déposez des tokens
          </h1>
          <div>
            <div>
              
            </div>
            <div>
              <input
                name="ether"
                type="number" 
                min="0.01"
                step="0.01"
                placeholder="Mountant à deposer"
              />
            </div>
          </div>
        </main>
        <footer>
          <button
            type="submit">
            Déposer
          </button>
          <ErrorMessage message={error} />
          <p>
          Vous avez déposé : {global.config.i18n.valeur} ETH
          </p>Le hash est :<TxList txs={txs} />
        </footer>
      </div>
    </form>
    </div>
  );
}
