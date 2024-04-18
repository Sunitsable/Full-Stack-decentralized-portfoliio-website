import {useState} from 'react';
import Hero from "./components/Hero/Hero";
import Wallet from "./components/Wallet/Wallet";
 import Handles from "./components/Handles/Handles";
 import Projects from "./components/Projects/Project";
 import Skills from "./components/Skills/Skills";
 import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
// Import Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import Reactstrap CSS
import '../node_modules/reactstrap/lib/Modal';

import "./index.css";
function App() {
  const [state,setState]=useState({
    web3:null,
    contract:null
  })
  const saveState=(state)=>{
    setState(state);
  }

  return (
    <>
      <Wallet saveState={saveState}></Wallet>
      <Hero state={state}/>
      <Handles />
      <Projects state={state}/>
      <Skills />
      <Experience state={state}/>
      <Contact state={state}/>
      <Handles />
    </>
  );
}

export default App;