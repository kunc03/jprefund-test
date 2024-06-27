/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/anchor-is-valid */
// components/Header.jsx

import { ChevronLeft } from 'lucide-react';
import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="relative flex w-full items-center justify-between bg-white px-6 py-[21px]">
      <a>
        <ChevronLeft className="cursor-pointer text-sm text-gray-200" />
      </a>
      <h1 className="text-gray-100 font-[18px]">{title}</h1>
      <div className="absolute inset-x-0 bottom-2 h-[2px] bg-gray-500" />
      <div className="opacity-0">
        <ChevronLeft className="text-sm" />
      </div>
    </header>
  );
};

export default Header;
