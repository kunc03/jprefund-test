import React from 'react';
import { cn, formatDateTime } from '@/utils';

const TransactionProcess = ({ transaction, isLast }) => {
  /* if (status === 'JC Approval.') {
    statusStyle = 'text-orange font-semibold';
  } else if (status === 'Completed') {
    statusStyle = 'text-blue-system font-semibold';
    additionalMessage =
      "<span class='noto-sans-jp-500 text-gray-100 leading-4 pr-8'>with settlement ID 6684 - 758 - A2 - DD.</span>";
  } */

  const getContent = (content) => {
    return content.replace(
      /(ready to submit|jc approval|completed)/gi,
      (match) => {
        if (match.toLowerCase() === 'ready to submit') {
          return `<span class="text-gray-300 font-medium">${match}</span>`;
        }
        if (match.toLowerCase() === 'completed') {
          return `<span class="text-blue-system font-medium">${match}</span>`;
        }
        return `<span class="text-orange font-medium">${match}</span>`;
      },
    );
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex h-56 flex-row gap-20">
        <div className="flex h-full flex-col items-center">
          <div
            className={cn(
              'size-20 shrink-0 rounded-full',
              transaction.isActive ? 'bg-green' : 'bg-gray-300',
            )}
          />
          {!isLast && <div className={cn(' w-px  bg-gray-300 h-full')} />}
        </div>
        <div>
          <p className="text-1010 font-medium text-gray-200">
            {formatDateTime(transaction.date)}
          </p>
          <p className="!text-1414 font-medium text-gray">
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: getContent(transaction.message),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export { TransactionProcess };
