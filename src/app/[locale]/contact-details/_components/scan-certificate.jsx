'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Webcam from 'react-webcam';

const ScanCertificate = () => {
  // const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const router = useRouter();

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setCapturedImage(imageSrc);
  // }, [webcamRef]);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/contact-details?s=sc');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="camera"
        videoConstraints={{ facingMode: 'environment' }}
      />
      <div className="overlay">
        <Image
          className="centered-image mb-56"
          alt="Qr Frame"
          height={260}
          src="/icons/certif-scan.svg"
          width={300}
          priority
        />
      </div>
      {/* <Image src={capturedImage} alt="Captured Image" /> */}
    </div>
  );
};

export { ScanCertificate };
