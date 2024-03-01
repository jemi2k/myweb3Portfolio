import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";
import hardhat from "../../assets/skills/hardhat.png"
import remix from "../../assets/skills/remix1.png"

const Skills = () => {
  return (
    <section className="skills-section">

        <img src={react} alt="react-icon" />
        
        <img src={eth} alt="eth-icon" />
        <img src={remix} alt="remix-icon" />
        <img src={hardhat} alt="hardhat-icon" />
        <img src={truffle} alt="truffle-icon" />
        <img src={gns} alt="gns-icon" />
        <img src={polygon} alt="polygon-icon" />
        <img src={node} alt="node-icon" />
        <img src={btc} alt="btc-icon" />
    </section>
  )
}

export default Skills
