/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import Image from 'next/image';
import React from 'react';

const ButtonCamera = ({ setIsClick }) => {
  const handleClickCapture = () => {
    setIsClick(true);
  };

  return (
    <Button
      onClick={handleClickCapture}
      className={cn(
        'flex h-auto items-center justify-center rounded-full bg-transparent hover:!bg-transparent focus:!bg-transparent focus:outline-none',
      )}
    >
      <Image src="/icons/camera.svg" width={64} height={64} alt="icon" />
    </Button>
  );
};

export { ButtonCamera };
