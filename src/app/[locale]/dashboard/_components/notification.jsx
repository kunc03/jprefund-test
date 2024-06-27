import Image from 'next/image';
import React from 'react';

const Notification = () => {
  return (
    <button
      type="button"
      className="relative flex h-[25px] w-[19.64px] items-center font-bold"
    >
      <Image
        alt="notification icons"
        className=""
        height={150}
        src="/icons/notification.svg"
        width={150}
      />
      <span className="absolute -right-1 top-[-2px] size-[10px] rounded-full bg-[#FF0000]" />
    </button>
  );
};

export { Notification };
