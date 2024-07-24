/* eslint-disable default-case */

'use client';

import { StatusContainer } from './status-container';
import { StoreInformation } from './store-information';
import React, { useEffect } from 'react';
import { formatTimeOnly, formatNumber, cn } from '@/utils';
import { usePathname, useRouter } from 'next/navigation';

const PurchaseItemCard = ({ item, setIsUnKyc, isAuth }) => {
  const router = useRouter();
  const pathname = usePathname();
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

  const handleUnKyc = () => {
    if (pathname === '/home2') {
      setIsUnKyc(item.unKyc);
    }
  };

  useEffect(() => {
    handleUnKyc();
  });

  const disabledItem = item.unKyc && pathname === '/home2';

  const handleClick = () => {
    if (disabledItem) {
      return;
    }
    router.push(`/purchase-detail/${item.id}`);
  };

  return (
    <div
      key={item.id}
      className={cn(
        'flex w-full flex-col gap-2 rounded-8 border border-gray-500 bg-white px-14 py-13  cursor-pointer',
        disabledItem && 'opacity-50 cursor-default',
      )}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      aria-hidden="true"
    >
      <div className="flex w-full flex-row justify-between">
        <StatusContainer
          label={item.label}
          labelUnKyc={item.labelUnKyc}
          unKyc={item.unKyc}
          color={colorLabelContainer}
          isAuth={isAuth}
        />
        <p className="!text-1322 font-medium text-gray">
          {formatTimeOnly(item.date)}
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
          <span className="!text-2022 font-bold text-red">
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
