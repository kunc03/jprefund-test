'use client';

// import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

const PassportScan = () => {
  const webcamRef = useRef(null);
  const router = useRouter();

  // useEffect(() => {
  //   const redirectTimeout = setTimeout(() => {
  //     router.push('/passport-information/form');
  //   }, 4000);

  //   return () => clearTimeout(redirectTimeout);
  // }, [router]);

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

      {/* <Image src={capturedImage} alt="Captured Image" /> */}
    </div>
  );
};

export { PassportScan };
