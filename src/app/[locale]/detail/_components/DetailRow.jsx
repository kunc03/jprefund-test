/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const DetailRow = ({ name, value, accented, bolder }) => {
  const valueClassName = accented
    ? 'text-red font-bold text-[20px]'
    : 'text-[14px] text-gray font-semibold';

  const valueBold = bolder ? 'noto-sans-jp-700' : 'noto-sans-jp-500';
  return (
    <section className="noto-sans-jp-400 mt-1 flex w-100 items-center px-[33.5px] py-1">
      <div className="flex w-full items-center justify-between border-b-2 border-gray-500 pb-3">
        <p className="noto-sans-jp-500 text-[13px] text-gray-200">{name}</p>
        <p className={`${valueClassName} ${valueBold}`}>{value}</p>
      </div>
    </section>
  );
};

export default DetailRow;
