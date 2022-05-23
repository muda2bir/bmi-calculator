import React, { useState } from "react";

const styles = {
  backgroundColor: "lightpink",
};

const btnStyle = {
  backgroundColor: "pink",
};

export default function Metric() {
  const [height, setHeight] = useState(0);
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const [weight, setWeight] = useState(0);
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const [bmi, setBmi] = useState(0);
  const calculateBMI = () => {
    setBmi(((weight / height / height) * 10000).toFixed(2));
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
      <div className="metric_method">
        <div className="holder">
          <p>Your Height: </p>
          <label htmlFor="height">(Centimeters)</label>
          <input type="number" id="height" onChange={handleHeightChange} />
        </div>
        <div className="holder">
          <p>Your Weight: </p>
          <label htmlFor="weight">(Kilograms)</label>
          <input type="number" id="weight" onChange={handleWeightChange} />
        </div>
        <div className="button_container">
          <button className="btn" onClick={calculateBMI} style={btnStyle}>
            Calculate
          </button>
        </div>
        <div className="holder">
          <h4>
            Your BMI: {bmi} ({report})
          </h4>
        </div>
      </div>
    </div>
  );
}
