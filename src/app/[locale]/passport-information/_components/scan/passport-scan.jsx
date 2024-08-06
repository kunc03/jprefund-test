'use client';

import React from 'react';
import Webcam from 'react-webcam';

const PassportScan = ({ webcamRef }) => {
  const videoConstraints = {
    facingMode: 'environment',
    // facingMode: 'user',
  };

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="camera"
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export { PassportScan };
