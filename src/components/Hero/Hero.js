import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ModalSection from "./Modal";

const Hero = () => {
  const progressPercentage = 80;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const [payButton, setPayButton] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-05-01T00:00:00"); // specify your target date here
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="heroSection">
      <div className="heroSectionSubDiv">
        <div className="heroSectionLeft">
          <p className="heroSectionLeftHeading">
            <span style={{ color: "yellow" }}> BlockGPT </span> is an advanced
            AI model specifically designed for the blockchain and cryptocurrency
            industries.
            {/* <span > 100x faster</span> (Literally) */}
          </p>
          <p className="heroSectionLeftDescription1">
            Simplify Smart Contracts: What They Are and How They Work
          </p>
          <div className="heroSectionLeftDescription2 word-rotator">
            <span className="word-1">
              Deploying a Smart Contract on the Ethereum Blockchain: A
              Step-by-Step Guide
            </span>
            <span className="word-2">
              An expert in all things crypto and blockchain, at your service!
            </span>
            <span className="word-3">
              Running a Bitcoin Wallet Locally: A Quick How-To Guide
            </span>
            <span className="word-4">
              Stay Up-to-Date on Crypto News with This Summary of the Latest
              Developments
            </span>
          </div>
          <div className="heroSectionButtons">
            <div> Book your Seat</div>
            <div>Watch a teaser</div>
          </div>
        </div>

        <div className="heroSectionRight">
          <div className="heroSectionRightTop">
            <p className="heroSectionCounter">
              {countdown.days}D : {countdown.hours}H : {countdown.minutes}M :{" "}
              {countdown.seconds}S
            </p>

            <div className="progressSection">
              {/* <div className="progressBar" style={{ width: `${progressPercentage}%` }}>
              </div> */}
              <div
                style={{ width: `${progressPercentage}%` }}
                className="progressLabel"
              >
                Until Next Price $0.007
              </div>
            </div>

            <p className="heroSectionRightCenterText3">
              USDT raised: $2,059,925 / $2,450,000
            </p>
            <p className="heroSectionRightCenterText1">LISTING PRICE: $0.01</p>
          </div>

          <div className="heroSectionRightCenter">
            <div id="container">
              <div class="line"></div>
              <div class="content">1 ECOTERRA = $0.00625</div>
              <div class="line"></div>
            </div>
            <div className="ThreeButtonsWrapper">
              <div
                className={payButton === 0 ? "activeButton" : "buttonsKeDiv"}
                onClick={() => setPayButton(0)}
              >
                ETH
              </div>
              <div
                className={payButton === 1 ? "activeButton" : "buttonsKeDiv2"}
                onClick={() => setPayButton(1)}
              >
                USDT
              </div>
              <div
                className={payButton === 2 ? "activeButton" : "buttonsKeDiv3"}
                onClick={() => setPayButton(2)}
              >
                CARD
              </div>
            </div>
            <TextField
              className="heroSectionTextFields"
              id="filled-multiline-flexible"
              label={`Amount in ${
                payButton === 0 ? "ETH" : payButton === 1 ? "USD" : "CARD"
              } you pay`}
              multiline
              maxRows={4}
              variant="filled"
            />
            <div
              style={{
                height: "10px",
                width: "10px",
                backgroundColor: "white",
              }}
            >
              {" "}
            </div>
            <TextField
              className="heroSectionTextFields heroSectionTextFields2"
              id="filled-multiline-flexible"
              label="Amount in ECOTERRA you receive"
              multiline
              maxRows={4}
              variant="filled"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />

            <ModalSection
              handleOpen={handleOpen}
              open={open}
              setOpen={setOpen}
            />
            <div onClick={handleOpen} className="heroSectionRightPurpleButtons">
              <div>CONNECT WALLET</div>
            </div>
            <div style={{ padding: "4%" }}>HOW TO BUY?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
