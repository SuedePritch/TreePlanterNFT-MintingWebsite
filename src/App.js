import './App.css';
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from 'web3';


async function connectWallet(){
  try{
    if(window.ethereum){
      var web3 = new Web3(window.ethereum);
      await ethereum.request({ method: 'eth_requestAccounts' });
      var accounts = accounts[0];
      document.getElementById('wallet-address').textContent = accounts;

      contract = new web3.eth.Contract(ABI, ADDRESS);
      document.getElementById('mint').onclick = async ()=>{
        var _mintAmount = Number(document.querySelector('[name=amount]').value);
        var mintRate = Number(await contract.methods.cost().call());
        var totalAmount = mintRate * _mintAmount;
        contract.methods.mint(account, _mintAmount).send({from:account, value:(totalAmount)});
      }
    }
  }catch(ex){
    console.log(ex);
  }
}

  function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">
          <h2>My Favourite Color</h2>
        </div>
        
          <form className="mintForm">
              <Button name="buttonSubmit">Connect Wallet</Button>
            <div className="card" id="wallet-address">
              <label className="floatingInput">0x2cDeC4E66b89102e66a3c5C119eD35168aD42312</label>
              <input  className="mintAmountInput" type="number" defaultValue={1} min={1} max={5}></input>
            </div>
              <button class="buttonSubmit">Mint</button>
          </form>
      </div>
    </div>
  );
}

export default App;
