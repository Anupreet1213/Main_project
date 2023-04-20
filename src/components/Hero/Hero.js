import React from "react";

const Hero = () => {
  return (
    <div className="heroSection"> 
    <div className="heroSectionSubDiv">
      <div className="heroSectionLeft">
        <p className="heroSectionLeftHeading">
          Build a better product <span style={{color:'#51CAB4'}}> 100x faster</span> (Literally) by
          becoming a UI/UX led
        </p>
        <p className="heroSectionLeftDescription1">
          Tech companies are stuck building the old way. A few simple yet
          powerful techniques will allow you to build a better product with
          minimal resources at breakneck speed and crush your market.
        </p>
        <p className="heroSectionLeftDescription2">Let’s show you how.</p>
        <div className="heroSectionButtons">
          <div> Book your Seat</div>
          <div>Watch a teaser</div>
        </div>
      </div>
      <div className="heroSectionRight">
        <div className="heroSectionRightTop">
            <p>Presale Stage 1</p>
            <p>Price : $0.02</p>
        </div>
        <hr className="horizontalRule" />
        <div className="heroSectionRightCenter">
            <p className="heroSectionRightCenterText1">Presale Stage 1</p>
            <p className="heroSectionRightCenterText2">1 CGPT = $0.02</p>
            <p className="heroSectionRightCenterText3">Hurry And Buy Before Stage 2 Price Increases To $0.0026</p>
            <p className="heroSectionRightCenterText4">Sold — $0 / 1,000,000,000</p>
            <p className="heroSectionRightCenterText5">USDT Raised — $0 / $2,000,000</p>
            <div className="heroSectionRightPurpleButtons">
                <div>BUY WITH WALLET</div>
                <div>BUY WITH CARD</div>
            </div>
            <div className="heroSectionRightWhiteButtons">
                <div>HOW TO BUY</div>
                <div>NEW TO CRYPTO</div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
