/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

// import Image from 'next/image';
// import QrScanner from 'qr-scanner';
import { useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { useQrScan } from '@/hooks';
// import { cn } from '@/utils';
import Webcam from 'react-webcam';

const QrScan = () => {
  // const scanner = useRef(null);
  // const videoEl = useRef(null);
  // const qrBoxEl = useRef(null);
  // const [qrOn, setQrOn] = useState(true);
  // const { onSelected } = useQrScan();
  // const router = useRouter();

  // const onScanSuccess = (result) => {
  //   if (result) {
  //     onSelected(result.data);
  //     router.push('/home');
  //   }
  // };

  // useEffect(() => {
  //   if (videoEl?.current && !scanner.current) {
  //     scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
  //       onDecodeError: () => {},
  //       preferredCamera: 'environment',
  //       highlightScanRegion: true,
  //       highlightCodeOutline: true,
  //       overlay: qrBoxEl?.current || undefined,
  //     });

  //     scanner?.current
  //       ?.start()
  //       .then(() => setQrOn(true))
  //       .catch((err) => {
  //         if (err) setQrOn(false);
  //       });
  //   }

  //   return () => {
  //     if (!videoEl?.current) {
  //       scanner?.current?.stop();
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!qrOn)
  //     alert(
  //       'Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.',
  //     );
  // }, [qrOn]);
  const webcamRef = useRef(null);
  // const router = useRouter();

  return (
    // <div
    //   className={cn(
    //     'relative flex flex-col justify-center items-center min-h-dvh',
    //   )}
    // >
    //   <video
    //     ref={videoEl}
    //     style={{ width: '100%', maxWidth: '100%', height: '100%' }}
    //     autoPlay
    //     playsInline
    //     className={cn('object-cover absolute')}
    //   />

    // </div>
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

export { QrScan };
