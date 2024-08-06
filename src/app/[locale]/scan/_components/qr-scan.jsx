/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';
import { cn } from '@/utils';
// import Image from 'next/image';

const QrScan = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const { onSelected } = useQrScan();
  const router = useRouter();

  const onScanSuccess = (result) => {
    if (result) {
      onSelected(result.data);
      router.push('/home');
    }
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: () => {},
        preferredCamera: 'environment',
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl?.current || undefined,
      });

      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (scanner.current) {
        scanner.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn)
      alert(
        'Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.',
      );
  }, [qrOn]);

  return (
    <div
      className={cn('camera-container')}
      style={{ width: '100%', height: '100%' }}
    >
      <video ref={videoEl} autoPlay playsInline className={cn('camera')} />
      <div className="relative">
        <div
          ref={qrBoxEl}
          style={{
            position: 'absolute',
            // border: '2px solid red',
            width: '336px',
            height: '350px',
            transform: 'translate(-50%, -50%)',
          }}
          className="scanner-box"
        />
      </div>
    </div>
  );
};

export { QrScan };
