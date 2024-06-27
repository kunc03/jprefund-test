/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const ReceiptList = ({ data }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Approval':
        return 'bg-green text-white';
      case 'Partial Approval':
        return 'bg-transparent text-blue border-blue border-2';
      case 'Denial':
        return 'bg-red-dark text-white';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <section className="mt-2 w-100 px-[33.5px] py-1 text-[13px]">
      <div className="flex flex-col border-b-2 border-gray-300 pb-3">
        <div
          className={`noto-sans-jp-400 mb-2 flex w-max rounded-lg px-4 py-1 text-[11px] ${getStatusClasses(
            data.status,
          )}`}
        >
          {data.status}
        </div>
        <h1 className="noto-sans-jp-500 text-gray-100 pr-7 text-[16px]">
          {data.name}
        </h1>
        <div className="noto-sans-jp-500 mt-1 flex w-100 justify-between py-1 text-[13px] text-gray-200">
          <p>price</p>
          <div className="noto-sans-jp-700 flex w-2/5 justify-between">
            <div className="noto-sans-jp-700 text-[14px] font-bold text-gray">
              {data.qty}
            </div>
            <div className="noto-sans-jp-700 text-[14px] font-bold text-gray">
              {data.price}
            </div>
          </div>
        </div>
        <div className="flex w-100 justify-between py-1 text-[13px] text-gray-200">
          <p>subtotal</p>
          <div className="noto-sans-jp-700 text-[14px] font-bold text-gray">
            {data.subtotal}
          </div>
        </div>
        <div className="flex w-100 justify-between py-1 text-[13px] text-gray-200">
          <p>Refund Amount</p>
          <div className="noto-sans-jp-700 text-[14px] font-bold text-red-light">
            {data.refund}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiptList;
