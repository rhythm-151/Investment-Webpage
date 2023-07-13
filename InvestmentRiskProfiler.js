import React, { useState } from "react";
import "./InvestmentRiskProfiler.css";
const InvestmentRiskProfiler = () => {
  const investmentExperienceOptions = [
    "0-3 years",
    "3-5 years",
    "5-7 years",
    "greater than 7 years",
  ];
  const investmentStyleOptions = ["Active", "Passive"];
  const investmentHorizonOptions = [
    "less than 3 years",
    "3-5 years",
    "5-7 years",
    "greater than 10 years",
  ];
  const wellDiversifiedReactionOptions = [
    "Accumulate",
    "Hold",
    "Reduce",
    "Exit",
  ];

  const [investmentExperience, setInvestmentExperience] = useState("");
  const [investmentStyle, setInvestmentStyle] = useState("");
  const [investmentObjective, setInvestmentObjective] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("");
  const [investmentHorizon, setInvestmentHorizon] = useState("");
  const [wellDiversifiedReaction, setWellDiversifiedReaction] = useState("");

  const handleOptionChange = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    switch (targetName) {
      case "investmentExperience":
        setInvestmentExperience(targetValue);
        break;
      case "investmentStyle":
        setInvestmentStyle(targetValue);
        break;
      case "investmentObjective":
        setInvestmentObjective(targetValue);
        break;
      case "riskTolerance":
        setRiskTolerance(targetValue);
        break;
      case "investmentHorizon":
        setInvestmentHorizon(targetValue);
        break;
      case "wellDiversifiedReaction":
        setWellDiversifiedReaction(targetValue);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bcolor">
      <h2 className="main-heading1">Investment Risk Profiler</h2>
      <h3 className="second-box">
        Welcome to <span id="small">risk profiler</span>
      </h3>
      <p className="third-box">
        Your investment is as important as understanding your emotional risk
        appetite.
      </p>
      <div className="investmentexperience">
        <label htmlFor="investmentExperience">Investment Experience:</label>
        {investmentExperienceOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              id="riskprofiler"
              name="investmentExperience"
              value={option}
              checked={investmentExperience === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
      <div className="investmentstyle">
        <label htmlFor="investmentStyle">Investment Style:</label>
        {investmentStyleOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="investmentStyle"
              id="investmentStyle"
              value={option}
              checked={investmentStyle === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="well">
  <label htmlFor="wellDiversifiedReaction">
    How would you react if well <br />
    diversified  portfolio falls below 10%:
  </label>
  <div className="radio-group">
    {wellDiversifiedReactionOptions.map((option) => (
      <div key={option} className="radio-option">
        <input
          type="radio"
          name="wellDiversifiedReaction"
          value={option}
          checked={wellDiversifiedReaction === option}
          onChange={handleOptionChange}
        />
        <label className="radio-label">{option}</label>
      </div>
    ))}
  </div>
</div>


      <div className="investmentobjective">
        <label htmlFor="investmentObjective">Investment Objective:</label>
        <select
          id="investmentObjective"
          value={investmentObjective}
          onChange={(event) => setInvestmentObjective(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="risktolerance">
        <label htmlFor="riskTolerance">Risk Tolerance:</label>
        <select
          id="riskTolerance"
          value={riskTolerance}
          onChange={(event) => setRiskTolerance(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="investmenthorizon">
        <label htmlFor="investmentHorizon">Investment Horizon:</label>
        < div className="radio-buttons">
        {investmentHorizonOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="investmentHorizon"
              value={option}
              checked={investmentHorizon === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentRiskProfiler;
