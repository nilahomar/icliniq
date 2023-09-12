import React from "react";
import { HiArrowRight } from "react-icons/hi";
import BannerImage from "../../assets/Banner-min-bg.jpg";
import "./banner.css";

function Banner() {
  return (
    <div>
      <div className="banner-container container">
        <div className="banner-content">
          <h1 className="banner-text-size">
            Consult <br></br>top doctors
          </h1>
          <h2 className="sub-text-size">effortlessly</h2>
          <p className="banner-text">
            Get 24/7 online consultations with the best doctors without breaking
            a sweat and your bank.
          </p>
        </div>

        <div className="cta-buttons">
          <div className="btn-width">
            <a
              href="https://www.icliniq.com/ask-a-doctor-online"
              className="cta-content"
            >
              <div className="consult-btn btn">
                Start a consult now
                <HiArrowRight className="banner-arrow" />
              </div>
            </a>

            <a
              href="https://www.icliniq.com/ask-a-doctor-online"
              className="cta-content"
            >
              <div className="sub-btn btn">Unlimited chat</div>
            </a>
          </div>

          <div className="">
            <a
              href="https://www.icliniq.com/ask-a-doctor-online"
              className="cta-query"
            >
              Your first query consult is free
            </a>
          </div>

          <div className="user-rating">
            <div className="user-rating-text">
              <h5>Trusted by</h5>
              <h2>5 million+ users</h2>
            </div>
            <div className="user-rating-text">
              <h5>Top rated by</h5>
              <h2>
                Parade <span className="user-rating-span">INSIDER</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="banner-image">
          <img src={BannerImage} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
