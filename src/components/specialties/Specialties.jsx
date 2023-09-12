import React from "react";
import "./specialties.css";
import Sliders from "./Sliders";

function Specialties() {
  return (
    <div className="specialties-container">
      <div className="specialty-content">
        <h3 className="specialty-header">
          From <span className="light-blue-letter">little</span> to <br />
          <span className="light-blue-letter">life-altering</span> issues,
        </h3>
        <h4>Get answers for anything and everything.</h4>
      </div>

      <div>
        <Sliders />
      </div>
      <div className="specialty-paragraph">
        <p>With 80+ specialties covered, get medical advice and medical second opinion to any of your health concerns under one roof.</p>
      </div>
    </div>
  );
}

export default Specialties;
