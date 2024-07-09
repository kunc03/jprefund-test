/* eslint-disable default-case */

'use client';

import { StatusContainer } from './status-container';
import { StoreInformation } from './store-information';
import React from 'react';
import { formatDateTime, formatNumber } from '@/utils';
import { useRouter } from 'next/navigation';

const PurchaseItemCard = ({ item }) => {
  const router = useRouter();
  let colorLabelContainer = '';

  switch (item.status) {
    case 'remittanceProcedureCompleted':
      colorLabelContainer = 'blue';
      break;
    case 'nonRefundable':
      colorLabelContainer = 'red';
      break;
    default:
      colorLabelContainer = 'orange';
      break;
  }

  return (
    <div
      key={item.id}
      className="flex w-full cursor-pointer flex-col gap-2 rounded-8 border border-gray-500 bg-white px-14 py-13"
      onClick={() => router.push(`/purchase-detail/${item.id}`)}
      role="button"
      tabIndex="0"
      aria-hidden="true"
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

export { PurchaseItemCard };
