'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

const handleRegisterByApple = () => {};
const handleRegisterByGoogle = () => {};
const handleRegisterByFacebook = () => {};
const handleRegisterByTwitter = () => {};
const handleRegisterByEmail = ({ router }) => {
  router.push('/register/email');
};
const handleRegisterByPhone = ({ router }) => {
  router.push('/register/phone');
};

const ButtonRegistration = ({ imageSrc, label, type, isDark = false }) => {
  const router = useRouter();
  const handleClick = () => {
    if (type === 'apple') handleRegisterByApple();
    if (type === 'facebook') handleRegisterByFacebook();
    if (type === 'google') handleRegisterByGoogle();
    if (type === 'twitter') handleRegisterByTwitter();
    if (type === 'email') handleRegisterByEmail({ router });
    if (type === 'phone') handleRegisterByPhone({ router });
  };

  return (
    <Button
      className={cn(
        'w-full !justify-center items-center text-center !px-10 gap-8 !text-1222 text-wrap h-auto rounded-full',
        isDark
          ? '!bg-white !text-red !border !border-red hover:!bg-dark/30'
          : '!border !border-gray-500 !bg-white !text-gray hover:!bg-white/30',
      )}
      onClick={handleClick}
    >
      <Image
        src={imageSrc}
        alt={type}
        width={24}
        height={24}
        className="size-auto"
      />
      {label}
    </Button>
  );
};

export { ButtonRegistration };
