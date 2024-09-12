'use client';

/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

const ScanCertificate = ({ isClick, form }) => {
  const videoEl = useRef(null);
  const canvasEl = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const router = useRouter();

  const onCaptureSuccess = () => {
    if (form === 'certificate') {
      router.push('/contact-details?s=sc');
    }
  };

  const takePicture = () => {
    if (videoEl.current && canvasEl.current) {
      const context = canvasEl.current.getContext('2d');
      canvasEl.current.width = videoEl.current.videoWidth;
      canvasEl.current.height = videoEl.current.videoHeight;
      context.drawImage(
        videoEl.current,
        0,
        0,
        canvasEl.current.width,
        canvasEl.current.height,
      );
      const image = canvasEl.current.toDataURL('image/png');
      setCapturedImage(image);
      localStorage.setItem('IMAGE_CERTIFICATE', image);
      onCaptureSuccess();
    }
  };

  // Initialize video stream
  useEffect(() => {
    const initStream = async () => {
      if (videoEl.current) {
        try {
          if (videoEl.current.srcObject) {
            const existingStream = videoEl.current.srcObject;
            const tracks = existingStream.getTracks();
            tracks.forEach((track) => track.stop());
          }

          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          videoEl.current.srcObject = stream;

          videoEl.current.onloadedmetadata = () => {
            videoEl.current.play().catch((error) => {
              console.error('Error playing video:', error);
            });
          };
        } catch (error) {
          console.error('Error accessing webcam:', error);
        }
      }
    };

    initStream();

    return () => {
      if (videoEl.current && videoEl.current.srcObject) {
        const stream = videoEl.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        // eslint-disable-next-line react-hooks/exhaustive-deps
        videoEl.current.srcObject = null;
      }
    };
  }, []);

  // Capture image when `isClick` changes
  useEffect(() => {
    if (isClick) {
      takePicture();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClick]);

  console.log('capturedImage:', capturedImage);

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
          className={cn('scanner absolute top-[100px]')}
          style={{ width: '360px', height: '360px' }}
        />
      </div>

      <video ref={videoEl} autoPlay playsInline className={cn('camera')} />

      {/* Canvas to capture and display the image */}
      <canvas ref={canvasEl} style={{ display: 'none' }} />
    </div>
  );
};

export { ScanCertificate };
