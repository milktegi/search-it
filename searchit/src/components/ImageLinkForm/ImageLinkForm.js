import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{'사진을 검색하면 얼굴 인식을 시작합니다.'}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="tex" />
          <button className="w-30 grow f4 link ph3 pv2 dib black bg-light-gray">
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
