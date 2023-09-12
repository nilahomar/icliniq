import React from "react";
import { Component } from "react";
import "./services.css";
import Slider from "react-slick";

import image1 from "../../assets/Comfortable.jpg";
import image2 from "../../assets/Anytime-1.jpg";
import image3 from "../../assets/Security.jpg";
import image4 from "../../assets/Appointment.jpg";
import image5 from "../../assets/Travel.jpg";

const services = [
  {
    id: "1",
    head: "Step into your  comfort zone.",
    subhead: "We're bringing the care to you.",
    content:
      "Be it your private cabin at work or your fave couch at home, consult doctors online from places you feel most comfortable.",
    url: image1,
    color: { backgroundColor: "#53449F" },
  },
  {
    id: "2",
    head: "Midnight fever or  Midday meltdown,",
    subhead: "your doctor's ready.",
    content:
      "With expert doctors available online 24/7, you can now get help whenever you need it. Just the way healthcare should be.",
    url: image2,
    color: { backgroundColor: "#8A1831" },
  },
  {
    id: "3",
    head: "Your peace of mind  matters to us.",
    subhead: "Our sturdy security is the proof.",
    content:
      "iCliniq is a HIPAA and GDPR compliant platform. All your data is safeguarded with secured SSL and data-at-rest encryption.",
    url: image3,
    color: { backgroundColor: "#B25907" },
  },
  {
    id: "4",
    head: "Book appointments real quick.",
    subhead: "Yes, you read it right.",
    content:
      "Get a quick and hassle-free appointment with an online doctor now without waiting long hours in a long queue.",
    url: image4,
    color: { backgroundColor: "#80B214" },
  },
  {
    id: "5",
    head: "Go, get your backpacks.",
    subhead: "We've got your back.",
    content:
      "Our doctors specifically address the needs of travelers and expats. So access to doctors during your next trip? Check.",
    url: image5,
    color: { backgroundColor: "#0141BD" },
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: "slides",
      responsive: [
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    return (
      <div className="conditions-wrapper">
        <Slider {...settings}>
          {services.map((service) => {
            return (
              <div className="service-slide">
                <div className="slider-image">
                  <img src={service.url} alt={service.id} />
                </div>
                <div className="service-content" style={service.color}>
                  <h3>{service.head}</h3>
                  <h7 >{service.subhead}</h7>
                  <p >{service.content}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
