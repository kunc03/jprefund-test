import { StatusContainer, StoreInformation } from '@/components';
import React from 'react';
import { formatDateTime, formatNumber } from '@/utils';

const ItemCard = ({ item }) => {
  let colorLabelContainer = 'orange';

  // eslint-disable-next-line default-case
  switch (item.status) {
    case 'remittanceProcedureCompleted':
      colorLabelContainer = 'blue';
      break;
    case 'nonRefundable':
      colorLabelContainer = 'red';
      break;
  }

  return (
    <div
      key={item.id}
      className="flex w-full cursor-pointer flex-col gap-2 rounded-8 border border-gray-500 bg-white px-14 py-13"
    >
      <div className="flex w-full flex-row justify-between">
        <StatusContainer label={item.label} color={colorLabelContainer} />
        <p className="!text-1322 font-medium text-gray">
          {formatDateTime(item.date)}
        </p>
      </div>
      <div>
        <div className="flex w-full flex-row justify-between">
          <span className="!text-1322 font-medium text-gray-200">
            Total purchase price
          </span>
          <span className="!text-1322 font-medium text-gray-200">
            {formatNumber(item.totalPurchasePrice, true)}
          </span>
        </div>
        <div className="flex w-full flex-row justify-between">
          <span className="!text-1322 font-bold text-gray">
            Expected refund amount
          </span>
          <span className="!text-1322 font-bold text-gray">
            {formatNumber(item.expectedRefundAmount, true)}
          </span>
        </div>
      </div>

      <StoreInformation
        imageSrc={item.storeImage}
        storeName={item.storeName}
        storeAdd={item.storeAddress}
      />
    </div>
  );
};

export { ItemCard };
