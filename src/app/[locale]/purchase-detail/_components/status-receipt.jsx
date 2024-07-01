import React from 'react';
import { cn } from '@/utils';

const getStatusClasses = (status) => {
  switch (status) {
    case 'Approval':
      return 'bg-green text-white';
    case 'Partial Approval':
      return 'bg-transparent text-blue border-blue border';
    case 'Denial':
      return 'bg-red-dark text-white';
    default:
      return 'bg-gray-100 text-gray-500';
  }
};

const StatusReceipt = ({ status }) => {
  return (
    <div
      className={cn(
        'font-medium rounded-4 text-1215.6 px-11 py-4.5 w-fit',
        getStatusClasses(status),
      )}
    >
      {status}
    </div>
  );
};

export { StatusReceipt };
