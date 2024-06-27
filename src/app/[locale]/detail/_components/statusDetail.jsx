/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from 'react';

const Status = ({ status }) => {
  const textColors = {
    rejected: 'text-red-dark',
    completed: 'text-blue',
    available: 'text-orange',
  };

  const borderColors = {
    rejected: 'border-red-dark',
    completed: 'border-blue',
    available: 'border-orange',
  };

  const message = {
    rejected: 'It was rejected by customs',
    completed: 'The remittance process is complete',
    available: 'Purchase history has been registered',
  };

  return (
    <div className="mt-4 h-[42px] w-100 px-[33.5px]">
      <div
        className={`bg-transparent text-center ${textColors[status]}  border-2 border-solid border-opacity-100 px-4 py-2 text-[14px] font-semibold ${borderColors[status]} w-full rounded-lg`}
      >
        {message[status]}
      </div>
    </div>
  );
};

export default Status;
