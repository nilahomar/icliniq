import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import "./nav.css"

function Nav() {
  return (
    <div>
      <a href="http://">
        <div className="symptom-check">
          Possible causes of symptoms in 3 mins
          <AiOutlineArrowRight className="symptom-check-arrow" />
        </div>
      </a>
    </div>
  );
}

export default Nav;
