import React from "react";
import Draggable from "../Drag/Draggable";

const Buy = () => {
  return (
    <div id="buy" style={{ position: "relative" }} className="draggableParent">
      <div className="draggable">
        <div>HOW TO BUY</div>
        <h2>HOW DO YOU BUY CGPT TOKEN IN THE PRESALE?</h2>
      </div>
      <div className="buySteps">
        <div>
          <span className="buySpan">STEP 1</span>
          <fieldset className="fieldset">
            <legend>INSTALL WALLET</legend>
            <p>
              To start with, ensure you have a MetaMask wallet installed on your
              browser in order to connect your wallet to the platform. If you
              are purchasing on mobile, we recommend using Trust Wallet and
              connecting through the in built browser
            </p>
          </fieldset>
        </div>
        <div>
          <span className="buySpan2">STEP 2</span>
          <fieldset className="fieldset">
            <legend>CONNECT WALLET</legend>
            <p>
              Once you’ve connected your wallet, you’ll be presented with 3
              options with which you can purchase $bgpt token. Read below for
              more information on these three options, and select the option
              which is right for you.
            </p>
          </fieldset>
        </div>
      </div>
      <Draggable />
      {/* <div style={{ color: "white" }}>Hello</div> */}
    </div>
  );
};

export default Buy;
