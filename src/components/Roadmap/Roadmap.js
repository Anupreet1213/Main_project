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
    <div className="RoadmapSection">
  
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
                <span class="title">Freelancer</span>
                <span>Since November 2022</span>
              </div>

              <ul>
                <li>The idea of BlockGPT was born.</li>
                <li>The idea of BlockGPT was born.</li>
                <li>The idea of BlockGPT was born.</li>
                <li>The idea of BlockGPT was born.</li>
                <li>The idea of BlockGPT was born.</li>
              </ul>

              <div class="bottom">
                <a href="https://www.freelancer.in/u/amanpathak26">
                  Freelance Profile
                </a>
                {/* <i>- Someone famous</i> */}
              </div>
            </section>
          </div>
          <div data-aos="fade-down" class="row row-2">
            <section>
              <i class="icon fas fa-star"></i>
              <div class="details">
                <span class="title">Project Contributer at VigyaAi</span>
                <span>Dec 2022-Feb 2023</span>
              </div>
              <p>
                <ul>
                  <li>• The idea of BlockGPT was born.</li>
                  <li>• The idea of BlockGPT was born.</li>
                  <li>• The idea of BlockGPT was born.</li>
                  <li>• The idea of BlockGPT was born.</li>
                  <li>• The idea of BlockGPT was born.</li>
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
              <i class="icon fas fa-rocket"></i>
              <div class="details">
                <span class="title">Top 1.5% in International Hackathon</span>
                <span>Jan 2023</span>
              </div>
              <p>
                Got a stunning position in the International Hackathon organised
                by Lablab.ai team. We built Machine Learning Based Project that
                uses Cohere API. The final product made us land in top 30 of the
                hackathon.
              </p>
              <div class="bottom">
                <a href="https://lablab.ai/u/@AmanAp/cld34glda001ade0seyrvzix2">
                  {" "}
                  Certification
                </a>
                {/* <i>- Someone famous</i> */}
              </div>
            </section>
          </div>
          <div data-aos="fade-down" class="row row-2">
            <section>
              <i class="icon fas fa-globe"></i>
              <div class="details">
                <span class="title">1st Prize in WebSpin Contest</span>
                <span>April 2022</span>
              </div>
              <p>
                I got the first prize in an event that focused on Web
                Development. The Event was on intercollege level with more than
                100 participants.
              </p>
              <div class="bottom">
                <a href="https://drive.google.com/file/d/1_nlIGzzrlNOR1WNNfCe9-I4S2wQMEPn_/view?usp=share_link">
                  Certification
                </a>
                {/* <i>- Someone famous</i> */}
              </div>
            </section>
          </div>
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
                  <li>• Pitching to big-tech companies, and founders, attracting    support and early investors.</li>
                  <li>• Development of a Chatbot based on BlockGPT’s AI model.</li>
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
