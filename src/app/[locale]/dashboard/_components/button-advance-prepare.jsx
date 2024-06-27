/* eslint-disable react/button-has-type */
import React from 'react';
import { cn } from '@/utils';

const ButtonAdvance = ({ onClick, className, label, type = 'button' }) => {
  return (
    <button
      type={type}
      className={cn(
        className,
        ' h-42 w-285 rounded-full border-2 border-red p-2 text-1515 font-semibold text-white',
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { ButtonAdvance };
