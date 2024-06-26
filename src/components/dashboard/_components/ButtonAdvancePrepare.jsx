import React from 'react';

const ButtonAdvance = ({ onClick, className, label }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} border-[2px] border-[#DD5C45] p-2 text-white w-[285px] h-[42px] rounded-full text-[15px] font-semibold`}
      >
        {label}
      </button>
    </>
  );
};

export default ButtonAdvance;
