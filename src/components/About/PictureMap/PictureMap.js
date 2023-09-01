import React from 'react';
import "./PictureMap.css";
import "./media.css";

const PictureMap = ({ pictures }) => {
  const columns = [];
  
  for (let i = 0; i < 4; i++) {
    const column = pictures.filter((_, idx) => idx % 4 === i);
    columns.push(column);
  }

  return (
    <div>
      <div className="littleHeader">
        <h5 className='h5Header'>Explore More</h5>
        <h3 className='h3Header'>Our International Packages</h3>
      </div>

      <div className="forPic">
        <div className='image-grid'>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="column">
              {column.map((picture) => (
                <div className="picture-container" key={picture.id}>
                  <div className="image-with-text">
                    <img
                      src={picture.url}
                      alt={picture.alt}
                      className="imgStyle"
                    />
                    <p className="image-caption">{picture.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureMap;
