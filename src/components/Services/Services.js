import React, { useState } from "react";
import  "./style.css";

import img1 from "../../assets/countries/alps.jpg";
import img2 from "../../assets/countries/barcelona.jpg";
import img3 from "../../assets/countries/india.jpeg";
import img4 from "../../assets/countries/la.jpg";
import img5 from "../../assets/countries/madrid.jpg";
import img6 from "../../assets/countries/maldives.jpg";

import Tour from "./Tour/Tour";
import Plan from "./Plan/Plan";
import Footer from "../Footer/Footer"

const Services = () => {
  const [tours] = useState([
    {
      id: 1,
      url: img1,
      alt: "Alps",
      desription:
        "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "1200$",
    },
    {
      id: 2,
      url: img2,
      alt: "Barcelona",
      desription:
        "Qui tempore voluptate lala quia commodi rem praesentium alias et.",
      price: "1100$",
    },
    {
      id: 3,
      url: img3,
      alt: "India",
      desription:
        "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "800$",
    },
    {
      id: 4,
      url: img4,
      alt: "LA",
      desription:
        "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "1100$",
    },
    {
      id: 5,
      url: img5,
      alt: "Madrid",
      desription:
        "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "900$",
    },
    {
      id: 6,
      url: img6,
      alt: "Maldives",
      desription:
        "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      price: "1200$",
    },
  ]);

  const rows = [];
  for (let i = 0; i < tours.length; i += 2) {
    rows.push(tours.slice(i, i + 2));
  }

  return (
    <div>

      <div className="mainDiv"> 

      <Tour tours={tours}/> 

        <Plan />


        </div>

    <Footer/>
    </div>
  );
};

export default Services;