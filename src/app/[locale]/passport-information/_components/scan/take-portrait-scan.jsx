import React from 'react';
import Webcam from 'react-webcam';

const TakePortrait = ({ webcamRef }) => {
  const videoConstraints = {
    // facingMode: 'environment',
    facingMode: 'user',
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

      {/* <Image src={capturedImage} alt="Captured Image" /> */}
    </div>
  );
};

export { TakePortrait };
