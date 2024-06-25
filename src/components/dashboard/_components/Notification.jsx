import Image from 'next/image';
import React from 'react';

const Notification = () => {
  return (
    <>
      <button className="relative flex items-center font-bold w-[19.64px] h-[25px] ">
        <Image
          src="/icons/notification.svg"
          alt="notification icons"
          width={150}
          height={150}
          className=""
        />
        <span className="absolute bg-[#FF0000] w-[10px] h-[10px] rounded-full top-[-2px] -right-1" />
      </button>
    </>
  );
};

export default Notification;
