import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex h-100 items-center justify-center overflow-hidden bg-gray-110 font-normal">
      <div className="relative min-h-screen w-[393px] rounded bg-white pb-10 shadow">
        <main>{children}</main>
      </div>
    </div>
  );
}
