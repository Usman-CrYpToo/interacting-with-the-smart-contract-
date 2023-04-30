import React, { useEffect } from 'react'
import abi from './artifacts/contracts/Lock.sol/Lock.json';
import { useState } from 'react';
import {ethers} from 'ethers';

const App = () => {
    const hello ='0x5fbdb2315678afecb367f032d93f642f64180aa3';
    const url = 'http://127.0.0.1:8545';
   const [provider, setprovider] = useState(null);
   const [contract, setContract] = useState(null);
   const [getGreet, setGreet] = useState(null);
   const [fill, setFill] = useState(null);
   const artifacts = abi.abi;
     useEffect(()=>{
      async function connect(){
        const pro = new ethers.providers.JsonRpcProvider(url);
        const signer =  pro.getSigner()
        const con = new ethers.Contract(hello, artifacts, signer);
        setprovider(pro);
        setContract(con);
        console.log("In");
       }
        connect();
     },[]);
     
     async function get() { 
      if(contract){
          const getter = await contract.getGreeter();
          setGreet(getter);
          console.log(getter);
      }
      }

      async function set(){
         if(contract){
             await contract.setGreeter(fill);
         
         }
         window.location.reload();
      }
     
  return (
    <div className='container text-center'>
      <span className="border border-warning-subtle">

    <form>
    <div className=" row mb-3">
      <label for="exampleInputEmail1" className="form-label">SET GREETER</label>
      <h1>{fill}</h1>
      <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setFill(event.currentTarget.value)}/>
      <div id="emailHelp" className="form-text">set greeter in the smart contract</div>
    </div>
     </form>
    <button  className="btn btn-danger" onClick={set}>set</button>

     <div className='m-4'>
     <div className="border border-success p-4 mb-4">{getGreet}</div>
     </div>
     <button type="submit" className="btn btn-primary" onClick={get}>get</button>
    </span>

    </div>

  )
}

export default App