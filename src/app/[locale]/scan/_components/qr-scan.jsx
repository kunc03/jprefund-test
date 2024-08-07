/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

// import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';
import { cn } from '@/utils';
import { BrowserMultiFormatReader } from '@zxing/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { BrowserMultiFormatReader } from '@zxing/browser';
// import Image from 'next/image';

const QrScan = () => {
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [scanner, setScanner] = useState(null);
  const [qrOn, setQrOn] = useState(true);
  const { onSelected } = useQrScan();
  const router = useRouter();

  const onScanSuccess = (result) => {
    if (result) {
      onSelected(result.getText()); // Use getText() to retrieve the result
      router.push('/home');
    }
  };

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    let videoStream;

    if (videoEl?.current) {
      codeReader
        .decodeFromVideoDevice(null, videoEl.current, (result, err) => {
          if (result) {
            onScanSuccess(result);
          }
          if (err) {
            console.error('Scan error:', err);
          }
        })
        .then((stream) => {
          videoStream = stream; // Save video stream to stop later
          setScanner(codeReader);
        })
        .catch((err) => {
          console.error('Error initializing scan:', err);
          setQrOn(false);
        });
    }

    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop()); // Stop all tracks from the video stream
      }
      // No need to call scanner.reset() since it does not exist in @zxing/browser
    };
  }, []);

  useEffect(() => {
    if (!qrOn) {
      alert(
        'Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.',
      );
    }
  }, [qrOn]);

  console.log(scanner);

  return (
    <div
      className={cn('camera-container')}
      style={{ width: '100%', height: '100%' }}
    >
      <div
        className={cn(
          'flex w-full h-screen items-center justify-center relative',
        )}
      >
        <div
          ref={qrBoxEl}
          className={cn('scanner absolute top-[100px]')}
          style={{ width: '360px', height: '360px' }}
        />
      </div>

      <video ref={videoEl} autoPlay playsInline className={cn('camera')} />
    </div>
  );
};

export { QrScan };
