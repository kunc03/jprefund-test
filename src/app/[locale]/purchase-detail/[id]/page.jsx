import React from 'react';
import { getTranslations } from 'next-intl/server';
import {
  Header,
  StoreInformation,
  StatusContainer,
  ItemDetail,
} from '@/components';
import dataDummy from '@/dummy-data.json';
import { formatNumber, formatDateTime } from '@/utils';
import { ReceiptList, TransactionProcess } from '../_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'detail' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const DetailPage = async ({ params }) => {
  const { locale, id } = params;
  const t = await getTranslations({ locale, namespace: 'detail' });
  const selectedData = dataDummy.filter((item) => item.id === id)?.[0] ?? null;

  if (!selectedData) return null;

  let colorLabelContainer = '';

  switch (selectedData.status) {
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

  const rows = [
    {
      id: 'dateTime',
      key: 'Date/Time',
      value: formatDateTime(selectedData.date),
    },
    {
      id: 'salesAmount',
      key: 'Sales Amount',
      value: formatNumber(selectedData.totalPurchasePrice, true),
    },
    {
      id: 'refundAmount',
      key: 'Expected Refund Amount',
      value: formatNumber(selectedData.expectedRefundAmount, true),
    },
    {
      id: 'transactionID',
      key: 'Transaction ID',
      value: 222221111111,
    },
  ];

  return (
    <div className="min-h-dvh bg-white">
      <Header hasBack title={t('purchaseDetails')} />
      <div className="flex flex-col gap-18 px-29 pt-21">
        <StoreInformation
          imageSrc={selectedData.storeImage}
          storeName={selectedData.storeName}
          storeAdd={selectedData.storeAddress}
        />
        <StatusContainer
          label={selectedData.label}
          color={colorLabelContainer}
          className="!flex h-42 !items-center !justify-center !rounded-8 text-center !text-1422 !font-bold"
        />

        <div className="flex flex-col gap-12">
          <ItemDetail rows={rows} />
          <ReceiptList rows={selectedData.receiptData} />
        </div>

        <div>
          {selectedData.status.toLowerCase() !== 'rejected' &&
            selectedData.transactions.map((item, index) => {
              return (
                <TransactionProcess
                  key={item.id}
                  transaction={item}
                  isLast={index === selectedData.transactions.length - 1}
                />
              ); // Assuming each transaction has a unique 'id'
            })}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
