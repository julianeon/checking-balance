import React from 'react';
import Web3Data from './components/Web3Data.js';
import './App.css';
import { useWeb3 } from '@openzeppelin/network/react';
const infuraProjectId = '<YOUR_INFURA_PROJECT_ID';

function App() {
const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
return (
<div className="App">
	<div>
	<h1>Infura React Dapp with Components!</h1>
	<Web3Data title="Web3 Data" web3Context={web3Context} />
	</div>
</div>
);
}
export default App;
