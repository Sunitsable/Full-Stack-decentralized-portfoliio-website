import React from 'react'
import './Skills.css'

import cplus from "../../assets/skills/cplus.png";
import dart from "../../assets/skills/dart.png";
import flask from "../../assets/skills/flask.png";
import mern from "../../assets/skills/hcj.jpeg";
import solidity from "../../assets/skills/mern.jpeg";
import hcj from "../../assets/skills/solidity.png";
//import node from "../../assets/skills/node.svg";


const Skills = () => {
  return (
    <section className="skills-section">

        <img src={cplus} alt="react-icon" />
        <img src={dart} alt="btc-icon" />
        <img src={flask} alt="eth-icon" />
        <img src={mern} alt="truffle-icon" />
        <img src={solidity} alt="gns-icon" />
        <img src={hcj} alt="polygon-icon" />
        {/* <img src={node} alt="node-icon" /> */}
    </section>
  )
}

export default Skills