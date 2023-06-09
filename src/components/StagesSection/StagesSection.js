import React from "react";

const StagesSection = () => {
  return (
    <div className="StagesSectionBody">
      <h1 className="stageSectionHeading">Stages Section</h1>
      <div className="stagesWrapper">
        <div className="stageOne">
          <div className="stageOneButton">Stage 1</div>
          <p>Total Tokens 1 Billion</p>
          <p>Per Token Price = $0.002</p>
        </div>
        <hr />
        <div className="stageTwo">
          <div className="stageTwoButton">Stage 2</div>
          <p>Total Tokens 500 Million</p>
          <p>Per Token Price = $0.0026</p>
        </div>
        <hr />
        <div className="stageThree">
          <div className="stageThreeButton">Stage 3</div>
          <p>Total Tokens 500 Million</p>
          <p>Per Token Price = $0.0033</p>
        </div>
        <hr />
        <div className="stageFour">
          <div className="stageFourButton">Stage 4</div>
          <p>Total Tokens 500 Million</p>
          <p>Per Token Price = $0.0042</p>
        </div>
        <hr />
        <div className="stageFive">
          <div className="stageFiveButton">Stage 5</div>
          <p>Total Tokens 500 Million</p>
          <p>Per Token Price = $0.0054</p>
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
