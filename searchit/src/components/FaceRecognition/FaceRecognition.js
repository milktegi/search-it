import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={imageUrl}
          width="500px"
          heigh="auto"
          alt=""
        />
        <div
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
          className="bounding-box"
        >
      
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
