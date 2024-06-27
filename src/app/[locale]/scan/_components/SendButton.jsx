'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SendButton = () => {
  const [sendBarcode, setSendBarcode] = useState('send');
  const router = useRouter();

  const handleSendScan = () => {
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
