'use client';

import React from 'react';

import { cn } from '@/utils';

const ItemFilter = ({
  onHandleClick,
  label,
  icon = null,
  className,
  isSelected = false,
}) => {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center justify-between rounded-4 p-14 transition-colors',
        isSelected
          ? 'bg-red text-white'
          : 'border-gray-300 hover:border-red bg-white-dark text-gray border',
        className,
      )}
      onClick={() => onHandleClick()}
      role="button"
      tabIndex="0"
      aria-hidden="true"
    >
      <p className="text-1313 font-medium">{label}</p>
      {icon && icon}
    </div>
  );
};

export { ItemFilter };
