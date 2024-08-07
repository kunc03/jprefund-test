/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

// import QrScanner from 'qr-scanner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks';
import { cn } from '@/utils';
import { useZxing } from 'react-zxing';

const QrScan = () => {
  const [result, setResult] = useState('');
  const { onSelected } = useQrScan();
  const [showVideoFeed, setShowVideoFeed] = useState(true);
  const router = useRouter();

  const { ref } = useZxing({
    onDecodeResult(decodeResult) {
      setResult(decodeResult.getText());
      setShowVideoFeed(false);
    },
  });

  useEffect(() => {
    if (result) {
      onSelected(result);
      router.push('/home');
    }
  }, [result, onSelected, router]);

  console.log(showVideoFeed);

  return (
    <div
      className={cn('camera-container')}
      style={{ width: '100%', height: '100%' }}
    >
      {/* <div
        className={cn(
          'flex w-full h-screen items-center justify-center relative',
        )}
      >
        <div
          id="qr-reader"
          ref={qrBoxEl}
          className={cn('scanner absolute top-[100px]')}
          style={{ width: '360px', height: '360px' }}
        />
      </div> */}

      <video ref={ref} autoPlay playsInline className={cn('camera')} />
    </div>
  );
};

export { QrScan };
