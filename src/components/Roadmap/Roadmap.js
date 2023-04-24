import React, { useEffect } from "react";
import AOS from "aos";
// import Image from "./Vector 1207.png"
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="roadmap" className="RoadmapSection">
      <div className="experienceDark">
        <p className="projectsHeading">Roadmap Section</p>

        <div class="wrapper">
          <div class="center-line">
            <a href="#" class="scroll-icon">
              <i class="fas fa-caret-up"></i>
            </a>
          </div>
          <div data-aos="fade-down" class="row row-1">
            <section>
              <i class="icon fas fa-home"></i>
              <div class="details">
                <span class="title">2023: Q3-Q4</span>
                {/* <span>Since November 2022</span> */}
              </div>
              <p>BlockGPT DAO</p>
              <p>
                DAO funds will begin unlocking to the DAO treasury (controlled
                by DAO voting)
              </p>
              <ul>
                <li>• 150m $CGPT tokens over 5 years, starting October 2023</li>
                <p>DApps Powered by BlockGPT AI</p>
                <li>• AI NFT Generator DApp based on ChainGPT Tech.</li>
                <li>BlockGPT Blockchain & Ecosystem Development</li>
                <li>
                  [Testnet] Layer-1 Blockchain designed for AI smart contracts
                  and models.
                </li>
                <li>• Explorer for BlockGPT Blockchain.</li>
                <li>• AI Models &amp; Tools Marketplace.</li>
                <li>• Web Wallet for BlockGPT Blockchain.</li>
                <li>• Wallet Extension for BlockGPT Blockchain.</li>
                <li>
                  • Wallet App (IOS &amp; Android) for BlockGPT blockchain.
                </li>
                <li>• Custom Remix for BlockGPT Blockchain.</li>
                <li>• Wormhole (bridge).</li>
              </ul>

              {/* <div class="bottom">
                <a href="https://www.freelancer.in/u/amanpathak26">
                  Freelance Profile
                </a>
                
              </div> */}
            </section>
          </div>
          <div data-aos="fade-down" class="row row-2">
            <section>
              <i class="icon fas fa-star"></i>
              <div class="details">
                <span class="title">2023: Q1-Q2</span>
              </div>
              <p>
                <ul>
                  <li>• AI Chatbot Prototype Version Release.</li>
                  <li>
                    • Staking &amp; Farming DApp designed for $BGPT and
                    supported tokens.
                  </li>
                  <li>
                    • BlockGPT AI Chatbot Official v1.0 Release [much more
                    advanced than beta, AI is online, can read live blockchain
                    data, live chart data, better at programming, new UI/UX].
                  </li>
                  <li>
                    • API &amp; SDK access for businesses &amp; developers.
                  </li>
                  <li>
                    • BlockGPT App for IOS &amp; Android release, with built-in
                    $BGPT supporting wallet.
                  </li>
                  <li>
                    • Release python-based BlockGPT bot for Telegram, Discord,
                    and Slack.
                  </li>
                  <li>• DAO voting system for $BGPT holders.</li>
                  <li>ChainGPT AI-Based Utilities Development</li>
                  <li>
                    • DevAssist Release: a browser extension powered by BlockGPT
                    AI technology providing users with information about smart
                    contracts they interact with them.
                  </li>
                  <li>• AI smart-contracts auditor (add-on to BlockGPT)</li>
                  <li>• Ask Crypto People (add-on to BlockGPT)</li>
                  <li>
                    • Prompt marketplace: share your best prompts &amp; earn
                    $BGPT rewards.
                  </li>
                </ul>{" "}
              </p>
              <div class="bottom">
                <a href="https://www.vigyaai.com/">VigyaAi</a>
                {/* <i>- Someone famous</i> */}
              </div>
            </section>
          </div>
          <div id="stars-group-1"></div>
          <div id="stars-group-2"></div>
          <div id="stars-group-3"></div>

          <div data-aos="fade-down" class="row row-1">
            <section>
              <i class="icon fas fa-globe"></i>
              <div class="details">
                <span class="title">2022 Q3-Q4</span>
                {/* <span>February 2018</span> */}
              </div>
              <p>
                <ul>
                  <li>• The idea of BlockGPT was born.</li>
                  <li>• Team Creation</li>
                  <li>• Design & planning of our leading AI model.</li>
                  <li>• BlockGPT Advanced AI Model Development.</li>
                  <li>• BlockGPT AI Model Research, Testing, Improvement.</li>
                  <li>
                    • Pitching to big-tech companies, and founders, attracting
                    support and early investors.
                  </li>
                  <li>
                    • Development of a Chatbot based on BlockGPT’s AI model.
                  </li>
                </ul>
              </p>
              <div class="bottom">
                <a href="https://drive.google.com/file/d/1_mzkZsVL8DqlML_-oLIKFjRFrZ1vaWUA/view?usp=share_link">
                  Certification
                </a>
                {/* <i>- Someone famous</i> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
