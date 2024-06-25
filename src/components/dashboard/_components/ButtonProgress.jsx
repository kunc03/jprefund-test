import React from 'react';

const ButtonProgress = ({ onClick, className, label, amount }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`relative flex flex-col ${className} p-2 gap-[5px] rounded-[8px] h-[73px] w-[138px] justify-between`}
      >
        <p className="text-[10px] text-start">{label}</p>
        <span className="absolute bottom-[2px] right-2 font-bold text-[18px] text-end w-full">
          {amount}
        </span>
      </button>
    </>
  );
};

export default ButtonProgress;
