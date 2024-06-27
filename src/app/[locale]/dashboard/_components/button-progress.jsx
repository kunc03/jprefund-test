/* eslint-disable react/button-has-type */
import React from 'react';
import { cn } from '@/utils';

const ButtonProgress = ({ onClick, className, label, amount, type }) => {
  return (
    <button
      type={type}
      className={cn(
        className,
        'relative flex flex-col h-73 w-138 justify-between gap-5 rounded-8 p-2',
      )}
      onClick={onClick}
    >
      <p className="text-start text-1010">{label}</p>
      <span className="absolute bottom-[2px] right-2 w-full text-end text-1822 font-bold">
        {amount}
      </span>
    </button>
  );
};

export { ButtonProgress };
