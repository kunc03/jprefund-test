/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React from 'react';

const Header = ({ data }) => {
  return (
    <section className="mt-2 flex w-100 items-center px-[33.5px] py-1">
      <div className="h-full max-w-[38px] flex-none object-cover">
        <Image alt="Store Icon" height={3} src={data.image} width={38} />
      </div>
      <div className="flex-1 pl-[16px]">
        <p className="noto-sans-jp-700 text-gray-100 text-[16px] font-semibold">
          {data.name}
        </p>
        <p className="noto-sans-jp-400 text-gray-100 pr-7 text-[12px] leading-[15.6px]">
          {data.address}
        </p>
      </div>
    </section>
  );
};

export default Header;
