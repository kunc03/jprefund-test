/* eslint-disable react/no-danger */
/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const TransactionProcess = ({ date, message, status, isActive }) => {
  let statusStyle = 'text-gray-200';
  let additionalMessage = '';

  if (status === 'JC Approval.') {
    statusStyle = 'text-orange font-semibold';
  } else if (status === 'Completed') {
    statusStyle = 'text-blue-system font-semibold';
    additionalMessage =
      "<span class='noto-sans-jp-500 text-gray-100 leading-4 pr-8'>with settlement ID 6684 - 758 - A2 - DD.</span>";
  }

  return (
    <div className="relative w-full px-[33.5px] text-[14px]">
      <div className="flex items-start">
        <div className="relative mr-4 flex flex-col items-center justify-center">
          <div
            className={`z-[2] min-h-[19px] min-w-[20px] rounded-full ${
              isActive ? 'bg-green' : 'bg-gray-200'
            }`}
          />
          <div
            className={`absolute top-[5px] z-0 w-px ${
              isActive ? 'h-20 bg-white' : 'h-20 bg-gray-300'
            }`}
          />
        </div>
        <div className="mb-7 flex flex-col gap-1">
          <small className="noto-sans-jp-500 text-[.7rem] leading-none text-gray-200">
            {date}
          </small>
          <h3 className="pr-11 leading-none">
            {message}
            <span className={`noto-sans-jp-400 ml-1 ${statusStyle}`}>
              {status}
            </span>
            {additionalMessage && (
              <span
                className="ml-1"
                dangerouslySetInnerHTML={{ __html: additionalMessage }}
              />
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TransactionProcess;
