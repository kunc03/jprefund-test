'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const handleFaceRecognition = ({ router, captureImage }) => {
  captureImage();
  router.push('/contact-details?s=sc');
};

const ButtonCamera = ({ form, captureImage }) => {
  const router = useRouter();

  const handleClick = () => {
    if (form === 'certificate') handleFaceRecognition({ router, captureImage });
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
