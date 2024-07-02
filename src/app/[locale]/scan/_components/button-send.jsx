'use client';

import { Button, Input } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
// import { DetailBottomDrawer } from '../../home/_components';
import { useState } from 'react';

const ButtonSend = () => {
  const router = useRouter();
  const t = useTranslations('scan');

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleScanButtonClick = () => {
    // Redirect to /home and pass a query parameter to indicate popup should be shown
    router.push('/home');
    console.log(inputValue);
  };

  return (
    <>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={t('enterTransactionNumber')}
        type="text"
        className="!h-42 !rounded-21 p-0 !px-14 !py-13 !text-1616"
      />
      <Button
        aria-hidden="true"
        role="button"
        tabIndex="0"
        key="send"
        className="!h-42 !shrink-0 !px-14 !py-13"
        onClick={handleScanButtonClick}
        disabled={!inputValue}
      >
        {t('send')}
      </Button>
    </>
  );
};

export { ButtonSend };

// scan start

// const router = useRouter();
// const pathname = usePathname();
// const t = useTranslations('scan');

// const selectedData = dataDummy?.[0] ?? null;

// if (!selectedData) return null;

// let colorLabelContainer = '';

// switch (selectedData.status) {
//   case 'remittanceProcedureCompleted':
//     colorLabelContainer = 'blue';
//     break;
//   case 'nonRefundable':
//     colorLabelContainer = 'red';
//     break;
//   default:
//     colorLabelContainer = 'orange';
//     break;
// }

// const rows = [
//   {
//     id: 'dateTime',
//     key: 'Date/Time',
//     value: formatDateTime(selectedData.date),
//   },
//   {
//     id: 'salesAmount',
//     key: 'Sales Amount',
//     value: formatNumber(selectedData.totalPurchasePrice, true),
//   },
//   {
//     id: 'refundAmount',
//     key: 'Expected Refund Amount',
//     value: formatNumber(selectedData.expectedRefundAmount, true),
//   },
//   {
//     id: 'transactionID',
//     key: 'Transaction ID',
//     value: 222221111111,
//   },
// ];

// scan end

// <Dialog>
//   <DialogTrigger>
// <Button
// aria-hidden="true"
// role="button"
// tabIndex="0"
// key="send"
// className="!h-42 !shrink-0 !px-14 !py-13"
// >
// {t('send')}
// </Button>
//   </DialogTrigger>
//   {pathname === '/home' && (
//     <DialogContent>
//       <div className="flex flex-col gap-18 px-29 pt-21">
//         <DialogHeader>
//           <StoreInformation
//             imageSrc={selectedData.storeImage}
//             storeName={selectedData.storeName}
//             storeAdd={selectedData.storeAddress}
//           />
//         </DialogHeader>
//         <StatusContainer
//           label={selectedData.label}
//           color={colorLabelContainer}
//           className="!flex h-42 !items-center !justify-center !rounded-8 text-center !text-1222 !font-bold"
//         />

//         <div className="flex flex-col gap-12">
//           <ItemDetail rows={rows} />
//           {/* <ReceiptList rows={selectedData.receiptData} /> */}
//         </div>

//         <Button>Refund application</Button>
//       </div>
//     </DialogContent>
//   )}
// </Dialog>
