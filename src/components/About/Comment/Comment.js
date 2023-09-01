import React, { useState, useEffect } from 'react';
import "./comment.css";
import "./media.css";

const Comment = () => {

  const [showComm, setShowComm] = useState(false);

  useEffect(() => {
    setShowComm(true); 
  }, []);

  return (
    <div>
     
     <div className={`forComments ${showComm ? 'show' : ''}`}>
        <div className="mainComm">
          <div className="div6">
            <h5 className='h5Comm'> PROMOTION</h5>
            <h2 className='h2Comm'> See What Other Clients Say About Us </h2>
            <div className="div7">
              <p className='pComm'> 
              Vel officiis dolor ea illo aut eligendi ullam non laudantium
              magnam et recusandae molestiae sit iure unde aut voluptate
              quaerat. Id sunt provident quo possimus impedit vel doloremque
              obcaecati qui ullam consectetur et ipsum omnis.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Comment;