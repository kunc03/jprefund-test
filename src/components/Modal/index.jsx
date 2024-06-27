'use client';

import { useRef } from 'react';

export default function Modal({ children }) {
  const overlay = useRef(null);

  return (
    <div
      ref={overlay}
      className="flex items-center justify-center bg-black/40 p-5"
    >
      <div className="relative flex flex-col items-center justify-center gap-4 rounded-[12px] bg-white px-3 py-5 text-center">
        {children}
      </div>
    </div>
  );
}
