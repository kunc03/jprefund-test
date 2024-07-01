'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import dataDummy from '@/dummy-data.json';
// import { useDrawer } from '@/hooks';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  Button,
  StoreInformation,
  StatusContainer,
  ItemDetail,
  //   DialogHeader,
  //   DialogTitle,
} from '@/components';
import { formatDateTime, formatNumber } from '@/utils';

const ButtonSend = () => {
  const t = useTranslations('scan');

  const selectedData = dataDummy?.[0] ?? null;

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
    <Dialog>
      <DialogTrigger>
        <Button
          // onClick={() => {
          //   router.push('/home');
          // }}
          aria-hidden="true"
          role="button"
          tabIndex="0"
          key="send"
          className="!h-42 !shrink-0 !px-14 !py-13"
        >
          {t('send')}
        </Button>
      </DialogTrigger>
      {/* {pathname === '/home' && ( */}
      <DialogContent>
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
            {/* <ReceiptList rows={selectedData.receiptData} /> */}
          </div>

          <Button>{t('Refund application')}</Button>
        </div>
      </DialogContent>
      {/* )} */}
    </Dialog>
  );
};

export { ButtonSend };
