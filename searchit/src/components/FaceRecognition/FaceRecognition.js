import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" src={imageUrl} width="500px" heigh="auto" alt="" />
        {box.map((face, idx) => {
          return (
            <div
						  key={idx}
              style={{
                top: face.topRow,
                right: face.rightCol,
                bottom: face.bottomRow,
                left: face.leftCol
              }}
              className="bounding-box"
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
