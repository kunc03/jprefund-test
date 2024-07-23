import React from 'react';
import { cn } from '@/utils';

const StatusContainer = ({ label, color, className, unKyc }) => {
  return (
    <div
      className={cn(
        'rounded-4 border px-2 !text-1022 font-bold',
        color === 'orange' && 'border-orange text-orange',
        color === 'blue' && 'border-blue text-blue',
        color === 'red' && 'border-red-dark text-red-dark',
        className,
      )}
    >
      {!unKyc ? label : 'Disabled'}
    </div>
  );
};

export { StatusContainer };
