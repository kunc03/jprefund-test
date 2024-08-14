'use client';

import { cn } from '@/utils';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';

const ButtonClose = ({ onHandleBack = null }) => {
  const router = useRouter();

  const handleBack = () => {
    if (onHandleBack) {
      onHandleBack();
    } else {
      router.back();
    }
  };

  return (
    <Button
      onClick={handleBack}
      className={cn(
        'absolute top-3 right-3 p-2 z-50 bg-transparent hover:bg-transparent',
      )}
    >
      <X size={24} className="cursor-pointer text-white" />
    </Button>
  );
};

export { ButtonClose };
