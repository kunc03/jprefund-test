'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Modal({ children }) {
  const overlay = useRef(null);

  return (
    <div
      ref={overlay}
      className="flex items-center justify-center p-5 bg-black/40"
    >
      <div className="relative bg-white flex flex-col items-center justify-center py-5 px-3 text-center rounded-[12px] gap-4">
        {children}
      </div>
    </div>
  );
}
