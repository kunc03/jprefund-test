'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { cn } from '@/utils';

const handleRegisterByApple = () => {};
const handleRegisterByGoogle = () => {};
const handleRegisterByFacebook = () => {};
const handleRegisterByTwitter = () => {};
const handleRegisterByEmail = () => {};
const handleRegisterByPhone = () => {};

const ButtonRegistration = ({ imageSrc, label, type, isDark = false }) => {
  const handleClick = () => {
    if (type === 'apple') handleRegisterByApple();
    if (type === 'facebook') handleRegisterByFacebook();
    if (type === 'google') handleRegisterByGoogle();
    if (type === 'twitter') handleRegisterByTwitter();
    if (type === 'email') handleRegisterByEmail();
    if (type === 'phone') handleRegisterByPhone();
  };

  return (
    <Button
      className={cn(
        'w-full !justify-start',
        isDark
          ? '!bg-black !text-white hover:!bg-dark/30'
          : '!border !border-gray-500 !bg-white !pl-10 !text-gray hover:!bg-white/30',
      )}
      onClick={handleClick}
    >
      <Image
        src={imageSrc}
        alt="apple"
        width={24}
        height={24}
        className="size-auto"
      />
      <p className="w-full text-center text-1322 font-bold">{label}</p>
    </Button>
  );
};

export { ButtonRegistration };
