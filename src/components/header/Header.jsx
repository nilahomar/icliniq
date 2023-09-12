import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import Logo from "../../assets/ic-white-logo.svg";
import SideBar from "./Sidebar";

function Nav() {
  return (
    <div>
      <div>
        <a href="http://">
          <div className="symptom-check">
            Possible causes of symptoms in 3 mins
            <AiOutlineArrowRight className="symptom-check-arrow" />
          </div>
        </a>
      </div>

      <div className="nav-top">
        <div className="hamburger-menu">
          <span className="hamburger">
          <SideBar/>
          </span>
        </div>
        <div className="logo">
          <a href="http://">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
