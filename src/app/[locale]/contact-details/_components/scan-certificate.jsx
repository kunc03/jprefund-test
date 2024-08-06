'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Webcam from 'react-webcam';

const ScanCertificate = () => {
  // const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  // const router = useRouter();

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setCapturedImage(imageSrc);
  // }, [webcamRef]);

  //     router.push('/contact-details?s=sc');

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="camera"
        videoConstraints={{ facingMode: 'environment' }}
      />

      {/* <Image src={capturedImage} alt="Captured Image" /> */}
    </div>
  );
};

export { ScanCertificate };
