/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';

const TakePortrait = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const { onSelected } = useQrScan();
  const router = useRouter();

  const onScanSuccess = (result) => {
    if (result) {
      onSelected(result.data);
      router.push('/passport-information/form-completed');
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
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn)
      alert(
        'Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.',
      );
  }, [qrOn]);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/passport-information/not-complete');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="qr-reader">
      <video ref={videoEl} />
      <div
        ref={qrBoxEl}
        className="qr-box !top-14 flex items-center justify-center"
      >
        <Image
          alt="face Frame"
          height={298}
          src="/images/face-frame.svg"
          width={339.5}
          priority
        />
      </div>
    </div>
  );
};

export { TakePortrait };
