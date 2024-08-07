/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import QrScanner from 'qr-scanner';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';
import { cn } from '@/utils';

const QrScan = () => {
  const qrScanner = useRef(null);
  const barcodeScanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const { onSelected } = useQrScan();
  const router = useRouter();

  const onScanSuccess = (result) => {
    if (result) {
      onSelected(result.text || result.data);
      router.push('/home');
    }
  };

  useEffect(() => {
    if (videoEl?.current) {
      // Initialize QR Scanner
      if (!qrScanner.current) {
        qrScanner.current = new QrScanner(videoEl.current, onScanSuccess, {
          onDecodeError: (error) => console.error('Decode error:', error),
          preferredCamera: 'environment',
          highlightScanRegion: true,
          highlightCodeOutline: true,
          overlay: qrBoxEl.current || undefined,
        });

        qrScanner.current
          .start()
          .then(() => setQrOn(true))
          .catch((err) => {
            console.error('QR Scanner start error:', err);
            setQrOn(false);
          });
      }

      // Initialize Barcode Scanner
      if (!barcodeScanner.current) {
        barcodeScanner.current = new BrowserMultiFormatReader();
        barcodeScanner.current
          .listVideoInputDevices()
          .then((videoInputDevices) => {
            if (videoInputDevices.length > 0) {
              barcodeScanner.current
                .decodeFromVideoDevice(
                  videoInputDevices[0].deviceId,
                  videoEl.current,
                  (result, err) => {
                    if (result) {
                      onScanSuccess(result);
                    }
                    if (err && !(err instanceof NotFoundException)) {
                      console.error('Barcode decode error:', err);
                    }
                  },
                )
                .catch((err) => {
                  console.error('Barcode Scanner start error:', err);
                  setQrOn(false);
                });
            }
          })
          .catch((err) => {
            console.error('Video input devices error:', err);
            setQrOn(false);
          });
      }
    }

    return () => {
      if (qrScanner.current) {
        qrScanner.current.stop();
        qrScanner.current = null;
      }
      if (barcodeScanner.current) {
        barcodeScanner.current.reset();
        barcodeScanner.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn) {
      alert(
        'Camera is blocked or not accessible. Please allow camera in your browser permissions and reload.',
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
