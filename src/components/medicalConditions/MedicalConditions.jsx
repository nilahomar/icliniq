import React from "react";
import conditions from "./conditions";
import "./medical-conditions.css";

function MedicalConditions() {
  return (
    <>
      <div className="medical-conditions">
        <h4 className="medical-condition-header">
          Most searched medical conditions
        </h4>
        <div className="contents">
          {/* Loop through the list of medical conditions from conditions.js */}
          {conditions.map((conditions) => {
            return (
              <a
                href="/#"
                key={conditions.id}
                className="medical-conditions-content"
              >
                {conditions.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MedicalConditions;
