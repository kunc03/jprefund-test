import Image from 'next/image';
import React from 'react';

const MenuBar = () => {
  return (
    <>
      <button className="relative flex items-center font-bold w-[26px] h-[18px] ">
        <Image
          src="/icons/menu.svg"
          alt="menu icons"
          width={150}
          height={150}
          className=""
        />
        <span className="absolute bg-[#FF0000] w-[10px] h-[10px] rounded-full top-[-3px] -right-1" />
      </button>
    </>
  );
};

export default MenuBar;
