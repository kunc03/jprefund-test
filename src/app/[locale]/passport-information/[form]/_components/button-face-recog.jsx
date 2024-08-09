/* eslint-disable react/button-has-type */

'use client';

import { Button } from '@/components';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonRecognition = ({ t }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/passport-information/take-portrait');
  };
  return (
    <Button
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center rounded-6 border border-red bg-white p-2 font-bold text-red hover:bg-white-dark h-auto text-wrap',
      )}
    >
      {t('photographFace')}
    </Button>
  );
};

export { ButtonRecognition };
