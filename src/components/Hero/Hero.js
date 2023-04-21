import React from "react";

const Hero = () => {
  return (
    <div className="heroSection">
      <div className="heroSectionSubDiv">
        <div className="heroSectionLeft">
          <p className="heroSectionLeftHeading">
            <span style={{ color: "#51CAB4" }}> BlockGPT </span> is an advanced
            AI model specifically designed for the blockchain and cryptocurrency
            industries.
            {/* <span > 100x faster</span> (Literally) */}
          </p>
          <p className="heroSectionLeftDescription1">
            Simplify Smart Contracts: What They Are and How They Work
          </p>
          <div className="heroSectionLeftDescription2 word-rotator">
            <span className="word-1">Deploying a Smart Contract on the Ethereum Blockchain: A Step-by-Step Guide</span>
            <span className="word-2">An expert in all things crypto and blockchain, at your service!</span>
            <span className="word-3">Running a Bitcoin Wallet Locally: A Quick How-To Guide</span>
            <span className="word-4">Stay Up-to-Date on Crypto News with This Summary of the Latest Developments</span>
       
          </div>
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
            <p className="heroSectionRightCenterText3">
              Hurry And Buy Before Stage 2 Price Increases To $0.0026
            </p>
            <div>
              <div className="heroStagesSectionHorizontalLine1"></div>
              <div className="heroStagesSection">
                <div>
                  <div className="heroSectionStagesCircular ">
                    {" "}
                    <div className="heroSectionStagesCircularInside1"> </div>
                  </div>
                  <p>Stage 1</p>
                </div>
                <div>
                  <div className="heroSectionStagesCircular"></div>
                  <p>Stage 2</p>
                </div>
                <div>
                  <div className="heroSectionStagesCircular"></div>
                  <p>Stage 3</p>
                </div>
                <div>
                  <div className="heroSectionStagesCircular"></div>
                  <p>Stage 4</p>
                </div>
                <div>
                  <div className="heroSectionStagesCircular"></div>
                  <p>Stage 5</p>
                </div>
              </div>
            </div>

            <p className="heroSectionRightCenterText4">
              Sold — $0 / 1,000,000,000
            </p>
            <p className="heroSectionRightCenterText5">
              USDT Raised — $0 / $2,000,000
            </p>
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
