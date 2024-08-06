/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const handleFaceRecognition = ({ router, captureImage }) => {
  captureImage();
  router.push('/passport-information/not-complete');
};
const handleRoutesPassport = ({ router, captureImage }) => {
  captureImage();
  router.push('/passport-information/form');
};

const ButtonCamera = ({ form, captureImage }) => {
  const router = useRouter();

  const handleClick = () => {
    if (form === 'face') handleFaceRecognition({ router, captureImage });
    if (form === 'passport') handleRoutesPassport({ router, captureImage });
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        'flex h-auto items-center justify-center rounded-full bg-transparent hover:!bg-transparent focus:!bg-transparent focus:outline-none',
      )}
    >
      <Image src="/icons/camera.svg" width={64} height={64} alt="icon" />
    </Button>
  );
};

export { ButtonCamera };
