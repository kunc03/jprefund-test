/* eslint-disable react/button-has-type */

'use client';

import { Button } from '@/components';
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
      className="flex items-center justify-center rounded-6 border border-red bg-white py-2 font-bold  text-red hover:bg-white-dark"
    >
      {t('photographFace')}
    </Button>
  );
};

export { ButtonRecognition };
