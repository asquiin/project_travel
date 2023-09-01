import React, { useState } from "react";
import "./about.css";

import img1 from "../../assets/countries/alps.jpg";
import img2 from "../../assets/countries/barcelona.jpg";
import img3 from "../../assets/countries/india.jpeg";
import img4 from "../../assets/countries/la.jpg";
import img5 from "../../assets/countries/madrid.jpg";
import img6 from "../../assets/countries/maldives.jpg";
import img7 from "../../assets/countries/rio.jpg";
import img8 from "../../assets/countries/seoul.jpeg";
import img9 from "../../assets/countries/sing.jpg";
import img10 from "../../assets/countries/Switzerland.jpg";
import img11 from "../../assets/countries/maldives.jpg";
import img12 from "../../assets/countries/tmr.jpeg";

import Footer from "../Footer/Footer";

import Trend from "./Trend/Trend";
import Promotion from "./Promotion/Promotion";
import PictureMap from "./PictureMap/PictureMap";
import Comment from "./Comment/Comment";

const About = () => {
  const [pictures] = useState([
    { id: 1, url: img1, alt: "Alps mountains 800$" },
    { id: 2, url: img2, alt: "Barcelona 900$" },
    { id: 3, url: img3, alt: "India 400$" },
    { id: 4, url: img4, alt: "Los Angeles 940$" },
    { id: 5, url: img5, alt: "Madrid 850$" },
    { id: 6, url: img6, alt: "Maldives 750$" },
    { id: 7, url: img7, alt: "Rio de Jenero 600$" },
    { id: 8, url: img8, alt: "Seoul 900$" },
    { id: 9, url: img9, alt: "Singapore 700$" },
    { id: 10, url: img10, alt: "Switzerland 800$" },
    { id: 11, url: img11, alt: "Maldives 950$" },
    { id: 12, url: img12, alt: "Tommorrow land 540$" },
  ]);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Promotion />
      <PictureMap pictures={pictures} />
      <Trend />
      <Comment />
      <Footer />
    </div>
  );
};

export default About;
