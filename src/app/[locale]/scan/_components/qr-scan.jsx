/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

// import QrScanner from 'qr-scanner';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';
import { cn } from '@/utils';

const QrScan = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [, setScannerActive] = useState(false);
  const { onSelected } = useQrScan();
  const router = useRouter();

  const onScanSuccess = (result) => {
    if (result) {
      onSelected(result.text || result.data);
      router.push('/home');
    }
  };

  const initializeScanners = () => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new BrowserMultiFormatReader();

      scanner.current
        .listVideoInputDevices()
        .then((videoInputDevices) => {
          if (videoInputDevices.length > 0) {
            // Prefer the rear camera
            const rearCamera =
              videoInputDevices.find((device) =>
                device.label.toLowerCase().includes('back'),
              ) || videoInputDevices[0];
            const { deviceId } = rearCamera;

            scanner.current
              .decodeFromVideoDevice(
                deviceId,
                videoEl.current,
                (result, err) => {
                  if (result) {
                    onScanSuccess(result);
                  }
                  if (err && !(err instanceof NotFoundException)) {
                    console.error('Decode error:', err);
                  }
                },
              )
              .then(() => setScannerActive(true))
              .catch((err) => {
                console.error('Scanner start error:', err);
                setScannerActive(false);
              });
          } else {
            console.error('No video input devices found.');
            setScannerActive(false);
          }
        })
        .catch((err) => {
          console.error('Error listing video input devices:', err);
          setScannerActive(false);
        });
    }
  };

  useEffect(() => {
    initializeScanners();

    return () => {
      if (scanner.current) {
        scanner.current.reset();
        scanner.current = null;
      }
    };
  }, []);

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
