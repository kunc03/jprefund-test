import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const ScanCertificate = () => {
  const webcamRef = useRef(null);

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
