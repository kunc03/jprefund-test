import React from 'react';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden noto-sans-jp-400 h-100 flex align-items-center justify-center bg-gray-100">
      <div className="relative min-h-screen w-[393px] bg-white rounded shadow pb-10">
        <main>{children}</main>
      </div>
    </div>
  );
}
