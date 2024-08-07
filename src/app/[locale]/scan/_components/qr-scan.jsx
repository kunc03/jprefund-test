/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

// import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';
import { cn } from '@/utils';
import { BarcodeReader } from 'dynamsoft-javascript-barcode';

const QrScan = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const { onSelected } = useQrScan();
  const router = useRouter();

  const onScanSuccess = (result) => {
    if (result && result.length > 0) {
      onSelected(result[0].barcodeText);
      router.push('/home');
    }
  };

  useEffect(() => {
    const initializeScanner = async () => {
      if (videoEl?.current && !scanner.current) {
        try {
          // Initialize Dynamsoft Barcode Reader
          scanner.current = await BarcodeReader.createInstance();

          // Start video scanning
          await scanner.current.setVideoElement(videoEl.current);
          scanner.current.onFrameRead = onScanSuccess;
          await scanner.current.open();
          setQrOn(true);
        } catch (err) {
          console.error('Scanner start error:', err);
          setQrOn(false);
        }
      }
    };

    initializeScanner();

    return () => {
      if (scanner.current) {
        scanner.current.destroyContext();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn) {
      alert(
        'Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.',
      );
    }
  }, [qrOn]);

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
