import React from "react";
import { Link } from "react-router-dom";

export default function MethodContainer() {
  return (
    <div className="method_container">
      <div className="standard_container">
        <Link to="/" className="anchors">
          <strong>Standard</strong>
        </Link>
      </div>
      <div className="metric_container">
        <Link to="/metric" className="anchors">
          <strong>Metric</strong>
        </Link>
      </div>
    </div>
  );
}
