import React, { useState } from "react";

const styles = {
  backgroundColor: "lightblue",
};

export default function Calculator() {
  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleFeetChange = (event) => {
    setFeet(event.target.value);
  };

  const handleInchChange = (event) => {
    setInch(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const totalInches = parseFloat(feet * 12) + parseFloat(inch);

  const [bmi, setBmi] = useState(0);
  const calculateBMI = () => {
    setBmi(((weight / totalInches / totalInches) * 703).toFixed(2));
  };

  let report = "";

  if (bmi < 18.5) {
    report = "underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    report = "normal";
  } else if (bmi > 24.9 && bmi < 29.9) {
    report = "overweight";
  } else {
    report = "obesity";
  }

  return (
    <div className="container" style={styles}>
      <div className="standard_container">
        <div className="holder">
          <p>Enter your Height: </p>
          <div className="input_container">
            <div className="input-group">
              <label htmlFor="feet">(Feet)</label>
              <input type="number" id="feet" onChange={handleFeetChange} />
            </div>
            <div className="input-group">
              <label htmlFor="inches">(Inches)</label>
              <input type="number" id="inches" onChange={handleInchChange} />
            </div>
          </div>
        </div>
        <div className="holder">
          <p>Your Weight: </p>
          <label htmlFor="pounds">(Pounds)</label>
          <input type="number" id="pounds" onChange={handleWeightChange} />
        </div>
      </div>
      <div className="button_container">
        <button className="btn" onClick={calculateBMI}>
          Calculate
        </button>
      </div>
      <div className="holder">
        <h4>
          Your BMI: {bmi} ({report})
        </h4>
      </div>
    </div>
  );
}
