'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Webcam from 'react-webcam';

const PassportScan = () => {
  // const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  // const router = useRouter();

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setCapturedImage(imageSrc);
  // }, [webcamRef]);

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
      <div className="overlay">
        <Image
          src="/images/scan-passport.svg"
          width={265}
          height={250}
          alt="Passport Image"
          className="centered-image mb-36"
        />
      </div>
      {/* <Image src={capturedImage} alt="Captured Image" /> */}
    </div>
  );
};

export { PassportScan };
