'use client';

import React from 'react';
import { cn } from '@/utils';
import { usePathname } from 'next/navigation';

const StatusContainer = ({
  label,
  color,
  className,
  unKyc,
  isAuth,
  labelUnKyc,
}) => {
  const pathname = usePathname();
  const status = {
    disabled: 'Disabled',
  };
  let displayText = label;

  if (pathname === '/home2') {
    if (unKyc) {
      displayText = status.disabled;
    }
    if (unKyc && isAuth) {
      displayText = labelUnKyc;
    }
    if (!unKyc && isAuth) {
      displayText = labelUnKyc;
    }
  }

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
      {displayText || label}
    </div>
  );
};

export { StatusContainer };
