'use client';

import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const TakePortrait = () => {
  const webcamRef = useRef(null);

  // useEffect(() => {
  //   const redirectTimeout = setTimeout(() => {
  //     router.push('/passport-information/not-complete');
  //   }, 4000);

  //   return () => clearTimeout(redirectTimeout);
  // }, [router]);

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
