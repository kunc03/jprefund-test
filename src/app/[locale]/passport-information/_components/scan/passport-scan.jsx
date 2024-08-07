'use client';

import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

const PassportScan = () => {
  const webcamRef = useRef(null);

  const videoConstraints = {
    facingMode: 'environment',
    // facingMode: 'user',
  };

  useEffect(() => {});

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
