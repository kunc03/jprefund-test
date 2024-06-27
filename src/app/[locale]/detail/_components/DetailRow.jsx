import React from "react";

const DetailRow = ({ name, value, accented, bolder }) => {
  const valueClassName = accented
    ? "text-red font-bold text-[20px]"
    : "text-[14px] text-gray font-semibold";

  const valueBold = bolder ? "noto-sans-jp-700" : "noto-sans-jp-500";
  return (
    <section className="noto-sans-jp-400 mt-1 flex w-100 px-[33.5px] py-1 items-center">
      <div className="border-b-2 border-gray-500 flex justify-between items-center w-[100%] pb-3">
        <p className="text-gray-200 text-[13px] noto-sans-jp-500">{name}</p>
        <p className={`${valueClassName} ${valueBold}`}>{value}</p>
      </div>
    </section>
  );
};

export default DetailRow;
