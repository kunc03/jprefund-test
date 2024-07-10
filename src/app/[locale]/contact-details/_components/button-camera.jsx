/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Circle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const handleFaceRecognition = ({ router }) => {
  router.push('/contact-details');
};

const ButtonCamera = ({ form }) => {
  const router = useRouter();

  const handleClick = () => {
    if (form === 'certificate') handleFaceRecognition({ router });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-[40px] flex size-[64px] items-center justify-center rounded-full bg-white"
    >
      <Circle className="text-black" size={62} />
    </button>
  );
};

export { ButtonCamera };
