import React from 'react';
import { cn } from '@/utils';

const getStatusClasses = (status, remittance) => {
  switch (status) {
    case 'Approval':
      if (remittance === 'remittanceProcedureCompleted') {
        return 'bg-blue text-white';
      }
      return 'bg-green text-white';
    case 'Partial Approval':
      return 'bg-transparent text-blue border-blue border';
    case 'Denial':
      return 'bg-red-dark text-white';
    case 'Application Fee':
      return 'bg-green text-white';
    default:
      return 'bg-gray-100 text-gray-500';
  }
};

const StatusReceipt = ({ status, remittance }) => {
  return (
    <div className="flex items-start">
      <p
        className={cn(
          'font-medium rounded-4 text-1215.6 px-11 py-4.5',
          getStatusClasses(status, remittance),
        )}
      >
        {status}
      </p>
    </div>
  );
};

export { StatusReceipt };
