import React from 'react';
import Image from 'next/image';

const Header = ({ data }) => {
  return (
    <section className="mt-2 flex w-100 px-[33.5px] py-1 items-center">
      <div className="flex-none max-w-[38px] h-full object-cover">
        <Image src={data.image} alt="Store Icon" width={38} height={3} />
      </div>
      <div className="flex-1 pl-[16px]">
        <p className="noto-sans-jp-700 text-[16px] text-gray-100 font-semibold">{data.name}</p>
        <p className="noto-sans-jp-400 text-[12px] leading-[15.6px] text-gray-100 pr-7">
          {data.address}
        </p>
      </div>
    </section>
  );
};

export default Header;
