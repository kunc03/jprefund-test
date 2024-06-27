/* eslint-disable react/no-array-index-key */

'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

import { WarningMessage } from '@/components';

import DetailRow from '../../_components/DetailRow';
import Header from '../../_components/header';
import ReceiptList from '../../_components/ReceiptList';
import Status from '../../_components/statusDetail';
import StoreInformation from '../../_components/StoreInformation';
import TransactionProgress from '../../_components/TransactionProgress';

const IndexPage = () => {
  const receiptData = [
    {
      status: 'Approval',
      name: 'Ultra Stretch Dry EX Full Zip Parka (Long Sleeve)',
      qty: 1,
      price: 'JPY 1,990',
      subtotal: 'JPY 1,990',
      refund: 'JPY 190',
    },
    {
      status: 'Partial Approval',
      name: 'Suprima cotton pique socks',
      qty: 3,
      price: 'JPY 390',
      subtotal: 'JPY 1,170',
      refund: 'JPY0',
    },
    {
      status: 'Denial',
      name: 'NK Dry Shorts (Kei Nishikori French Open replica)',
      qty: 1,
      price: 'JPY 3,990',
      subtotal: 'JPY 3,990',
      refund: 'JPY 390',
    },
  ];
  const storeDetail = {
    image: '/images/Lalaport.png',
    name: 'LaLaport TOKYO-BAY',
    address: '2-1-1 Hamacho, Funabashi City, Chiba Prefecture 273-8530',
  };

  const transactions = [
    {
      date: '2024 May 17 at 08:55 AM',
      message: 'Transaction in store.',
    },
    {
      date: '2024 May 17 at 08:55 AM',
      message: 'Status change to',
      status: 'Ready to submit.',
    },
    {
      date: '2024 May 17 at 08:55 AM',
      message: 'Status change to Submitted with AliPay refund method.',
    },
    {
      date: '2024 May 17 at 08:55 AM',
      message: 'Status change to',
      status: 'JC Approval.',
      isActive: true,
    },
  ];

  const details = [
    { name: 'Date/Time', value: '2024 May 17 at 08:55 AM' },
    { name: 'Sales Amount', value: 'JPY 1,170', bolder: true },
    {
      name: 'Expected Refund Amount',
      value: 'JPY 0',
      accented: true,
      bolder: true,
    },
    { name: 'Transaction ID', value: '222221111111' },
  ];
  const header = 'Purchase details';
  const status = 'rejected';

  const errorMessage =
    'We regret to inform you that your refund request was unsuccessful If you believe we have made a mistake, please reach out to our Administrator or try again with different refund method or account.';

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header title={header} />
      <StoreInformation data={storeDetail} />
      <Status status={status} />
      <div className="mt-8">
        {details.map((detail, index) => (
          <DetailRow key={index} {...detail} />
        ))}

        <div className="my-3 flex justify-end px-[33.5px] text-1414 font-semibold text-blue-system">
          <button
            type="button"
            className="flex items-center gap-[10px]"
            onClick={handleToggle}
          >
            <p>{isOpen ? 'DetailsClose' : 'Receipt details'}</p>
            {isOpen ? (
              <ChevronUp className="mb-1 text-sm" />
            ) : (
              <ChevronDown className="mb-1 text-sm" />
            )}
          </button>
        </div>
        {isOpen && (
          <>
            <h1 className="mt-5 px-[33.5px] text-1822 font-normal">
              Purchase Contents:
            </h1>
            <div className="mb-5" id="receipt-list">
              {receiptData.map((item, index) => (
                <ReceiptList key={index} data={item} />
              ))}
            </div>
          </>
        )}
      </div>
      {status !== 'rejected' && (
        <div className="mt-5">
          {transactions.map((transaction, index) => (
            <TransactionProgress key={index} {...transaction} />
          ))}
        </div>
      )}
      {status === 'rejected' && <WarningMessage message={errorMessage} />}
    </>
  );
};

export default IndexPage;
