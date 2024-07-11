/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const handleFaceRecognition = ({ router }) => {
  router.push('/passport-information/form-completed');
};

const ButtonCamera = ({ form }) => {
  const router = useRouter();

  const handleClick = () => {
    if (form === 'photo') handleFaceRecognition({ router });
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        'absolute bottom-8 flex h-auto items-center justify-center rounded-full bg-transparent hover:!bg-transparent focus:!bg-transparent focus:outline-none',
      )}
    >
      <Image src="/icons/camera.svg" width={64} height={64} alt="icon" />
    </Button>
  );
};

export { ButtonCamera };
