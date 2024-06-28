'use client';

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CatchData } from '@/context/CatchData';

const SendButton = () => {
  const { catchData, setCatchData } = useContext(CatchData);
  const router = useRouter();

  const handleSendScan = () => {
    setCatchData('send');
    router.push('/dashboard');
  };

  return (
    <>
      <button
        onClick={handleSendScan}
        className="h-11 px-5 py-3.5 bg-red text-white hover:bg-red/90 flex items-center justify-center rounded-full"
      >
        Send
      </button>
    </>
  );
};

export default SendButton;
