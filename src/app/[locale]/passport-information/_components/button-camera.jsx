'use client';

import { Circle } from 'lucide-react';
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
    <button
      onClick={handleClick}
      className="absolute bottom-[40px] w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center"
    >
      <Circle className="text-black" size={62} />
    </button>
  );
};

export { ButtonCamera };
