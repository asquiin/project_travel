import React, { useState, useEffect } from "react";
import "./trend.css";
import "./media.css";
import pic3 from "../../../assets/pics/pic3.png";

const Trend = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const formPosition = document.querySelector('.secondMain').offsetTop;

          if (scrollPosition > formPosition) {
              setIsVisible(true);

              if (!hasAnimated) {
                  setHasAnimated(true);
              }
          } else {
              setIsFormVisible(true);
              setIsVisible(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [hasAnimated]);

  useEffect(() => {
      if (!isFormVisible && isVisible) {
          setHasAnimated(false);
      }
  }, [isVisible, isFormVisible]);

  return (
    <div>
    
    <div className={`secondMain ${isVisible ? 'show' : ''}`}>
        <div className="div4">
          <img className="pic3" src={pic3} alt="pic3" />
        </div>

        <div className="div5">
          <h5 className="h5Div5">TREND</h5>
          <h3 className="h3Div5">Our Popular Tour Plans</h3>
          <p1 className="pDiv5">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum autпш quibusdam!
          </p1>
        </div>
      </div>

    </div>
  );
};

export default Trend;
