import './Wallet.css'
import ABI from './ABI.json'
import Web3 from 'web3';
import { useState } from 'react';


const Wallet=({saveState})=>{
    const [connected,setConnected]=useState(true);
    const isAndroid = /android/i.test(navigator.userAgent);
    const init =async()=>{
        try {
            //getting web3 and contract instance for making contact instance 
            const web3=new Web3(window.ethereum);
            await window.ethereum.request({method:'eth_requestAccounts'});
            const contract = new web3.eth.Contract(
                ABI,'0xee94C80F6Ef2a15a5bDA0a9b0FB80F81d1FAaF58'
            )
            setConnected(false);
            saveState({web3:web3,contract:contract});

        } catch (error) {
            alert('Please install metamask')
        }
    }
    return( 
        <>
          <div className="header">
          {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
            <button className='connectBTN' onClick={init} disabled={!connected}>{connected ? "Connect to Metamask":"Connected"}</button>

          </div>
        </>
    )
 
    
}
export default Wallet; 