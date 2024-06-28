import React from 'react';

const ButtonFilter = ({ statusName, onClick, status }) => {
  console.log(status);
  return (
    <>
      <button
        onClick={onClick}
        className={`item flex justify-center p-3 border-[2px] rounded-[4px] ${
          status === status
            ? 'border-[#DD5C45]'
            : 'border-[#CFCECE] text-[#3F3F3F]'
        } w-full`}
      >
        {statusName}
      </button>
    </>
  );
};

export default ButtonFilter;
