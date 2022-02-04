import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Web3 from 'web3';

const connectwallet = async () => {
  // Check if MetaMask is installed on user's browser
  if(window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const chainId = await window.ethereum.request({ method: 'eth_chainId'});
    // Check if user is connected to Mainnet
    if(chainId !== '0x1') {
      alert("Please connect to Mainnet");
    } 
    // else {
    //   let wallet = accounts[0];
    //   setWalletAddress(wallet);
    // }
  } else {
    alert("Please install Mask");
  }
}
// async function connectWallet(){
//   try{
//     if(window.ethereum){
//       var web3 = new Web3(window.ethereum);
//       await ethereum.request({ method: 'eth_requestAccounts' });
//       var accounts = accounts[0];
//       document.getElementById('wallet-address').textContent = accounts;

//       contract = new web3.eth.Contract(ABI, ADDRESS);
//       document.getElementById('mint').onclick = async ()=>{
//         var _mintAmount = Number(document.querySelector('[name=amount]').value);
//         var mintRate = Number(await contract.methods.cost().call());
//         var totalAmount = mintRate * _mintAmount;
//         contract.methods.mint(account, _mintAmount).send({from:account, value:(totalAmount)});
//       }
//     }
//   }catch(ex){
//     console.log(ex);
//   }
// }

  function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">
          <h2>My Favourite Color</h2>
        </div>
        
          <form className="mintForm">
              <button className="buttonSubmit" onClick={connectwallet}>Connect Wallet</button>
            <div className="card" id="wallet-address">
              <label className="floatingInput">Address</label>
              <input  className="mintAmountInput" type="number" defaultValue={1} min={1} max={5}></input>
            </div>
              <button className="buttonSubmit">Mint</button>
          </form>
      </div>
    </div>
  );
}

export default App;
