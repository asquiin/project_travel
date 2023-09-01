import React, { useState, useEffect }  from "react";
import "./promotion.css"
import "./media.css"
import pic1 from "../../../assets/pics/ellipse.png";

const Promotion = () => {


  const [isSeen, setIsSeen] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isDivSeen, setIsDivSeen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const formPosition = document.querySelector('.mainAbout').offsetTop;

        if (scrollPosition > formPosition) {
            setIsSeen(true);

            if (!hasMoved) {
                setHasMoved(true);
            }
        } else {
            setIsDivSeen(true);
            setIsSeen(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [hasMoved]);



  return (
    <div>
      
        <div className={`mainAbout ${isSeen ? 'active' : ''}`}>
        <div className="div1">
          <h5 className="h5Div1">PROMOTION</h5>
          <h3 className="h3Div1">We Provide You Best Europe Sightseeing Tours</h3>
          <p className="pDiv1">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
           fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="btn1">View Packages</button>
        </div>

        <div className="div2">
          <img className="pic1" src={pic1} alt="pic1" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
