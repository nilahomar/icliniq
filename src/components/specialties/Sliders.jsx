import { Component } from "react";
import "./sliders.css";

import Slider from "react-slick";

import img1 from "../../assets/obstetrician-and-gynaecologist.svg";
import img2 from "../../assets/dermatologist.svg";
import img3 from "../../assets/internal-medicine-physician.svg";
import img4 from "../../assets/sexologist.svg";
import img5 from "../../assets/rheumatologist.svg";
import img6 from "../../assets/medical-gastroenterologist.svg";
import img7 from "../../assets/dentist.svg";
import img8 from "../../assets/allergy-specialist.svg";
import img9 from "../../assets/cosmetologist.svg";

// List of specialties
const images = [
  {
    id: "1",
    name: "Obstetrics and Gynecology",
    alt: "",
    url: img1,
  },
  {
    id: "2",
    name: "Dermatology",
    alt: "",
    url: img2,
  },
  {
    id: "3",
    name: "Internal Medicine",
    alt: "",
    url: img3,
  },
  {
    id: "4",
    name: "Sexology",
    alt: "",
    url: img4,
  },
  {
    id: "5",
    name: "Rheumatology",
    alt: "",
    url: img5,
  },
  {
    id: "6",
    name: "Medical Gastroenterology",
    alt: "",
    url: img6,
  },

  {
    id: "7",
    name: "Dentistry",
    alt: "",
    url: img7,
  },

  {
    id: "8",
    name: "Allergy Specialist",
    alt: "",
    url: img8,
  },

  {
    id: "9",
    name: "Cosmetology",
    alt: "",
    url: img9,
  },
];

// using react-slick library to create Carousel
export default class Carousel extends Component {
  render() {
    // override default settings from the library
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      className: "slides",
      centerMode: true,
      //Adjust settings in different screen sizes
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        {/* loop through the list of specialties */}
        {images.map((image) => {
          return (
            <div className="wrapper" key={image.id}>
              <div className="image-wrapper">
                <img className="slider-img" src={image.url} alt={image.alt} />
              </div>
              <p className="img-title">{image.name}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}
