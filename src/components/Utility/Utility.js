import React from "react";
import Image from "./sectionThree.png"

const Utility = () => {
  return (
    <div className="utilitySection">
      <div className="utilitySectionIntro">
        <p>Utility of Blockgpt ecosystem.</p>
        <p>Know about the product <span style={{color:"#6134BE"}}>Blockgpt</span></p>
      </div>
      <div className="utilitySectionContainer">
        <div className="utilitySectionLeft">
                <div className="utilitySectionLeftDivs">Smart Contract Copilot</div>
                <div className="utilitySectionLeftDivs">Write Smart Contract</div>
                <div className="utilitySectionLeftDivs">AML</div>
                <div className="utilitySectionLeftDivs">Chart Analysis</div>
                <div className="utilitySectionLeftDivs">Advance Trading</div>
                <div className="utilitySectionLeftDivs">Code Generator</div>
                <div className="utilitySectionLeftDivs">Code Auditor</div>
                <div className="utilitySectionLeftDivs">Source of news generator</div>
        </div>
        <div className="utilitySectionRight">
            <img src={Image} />
        </div>
      </div>
    </div>
  );
};

export default Utility;
