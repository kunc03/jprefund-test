import Image from 'next/image';
import React from 'react';

const MenuBar = () => {
  return (
    <button
      type="button"
      className="relative flex h-18 w-26 items-center font-bold "
    >
      <Image
        alt="menu icons"
        className=""
        height={150}
        src="/icons/menu.svg"
        width={150}
      />
      <span className="absolute -right-1 top-[-3px] size-[10px] rounded-full bg-red-light" />
    </button>
  );
};

export { MenuBar };
