import React from 'react';

const ButtonProgress = ({ onClick, className, label, amount }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`relative flex flex-col ${className} p-2 gap-[5px] rounded-[8px] h-[73px] lg:w-[138px] md:w-[138px] w-[112px] justify-between`}
      >
        <p className="lg:text-[10px] md:text-[10px] text-[9px] text-start">
          {label}
        </p>
        <span className="absolute bottom-[2px] right-2 font-bold lg:text-[18px] md:text-[18px] text-[15px] text-end w-full">
          {amount}
        </span>
      </button>
    </>
  );
};

export default ButtonProgress;
