import React, { useState, useEffect } from "react";
import "./tour.css";
import "./media.css";

const Tour = ({tours}) => {

  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setShowTable(true);
  }, []); 

    const rows = [];
    for (let i = 0; i < tours.length; i += 2) {
      rows.push(tours.slice(i, i + 2));
    }

  return (
    <div>

<div className="divFirst">
    <table className={`tableTour ${showTable ? 'visible' : ''}`}>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((tour) => (
                  <td key={tour.id}>
                     <div className="tour-container">
                     <div className="tour-with-text">
                    <img
                      src={tour.url}
                      alt={tour.alt}
                      className="tourStyle"
                    />
                     <h3>{tour.alt}</h3>
                     <p>{tour.desription}</p>
                     <h5>{tour.price}</h5>
                    </div>
                     </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
        
    

    </div>
  );
};

export default Tour;