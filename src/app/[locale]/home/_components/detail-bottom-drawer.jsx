'use client';

// import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import {
  Heading,
  StoreInformation,
  ItemDetail,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Button,
  DialogTitle,
} from '@/components';
import { useQrScan } from '@/hooks';
import { formatNumber } from '@/utils';
import { useRouter } from 'next/navigation';

const DetailBottomDrawer = (props) => {
  const [open, setIsOpen] = useState();
  const router = useRouter();

  const onCloseDrawer = () => {
    setIsOpen(false);

    // console.log(props.isOpen);

    router.push('/home');
  };

  const t = useTranslations('home');
  const { selectedValue } = useQrScan();

  const rows = [
    {
      id: 'dateTime',
      key: 'Date/Time',
      value: '2024 May 17 at 08:55 AM',
    },
    {
      id: 'salesAmount',
      key: 'Sales Amount',
      value: formatNumber(7150, true),
    },
    {
      id: 'refundAmount',
      key: 'Expected Refund Amount',
      value: formatNumber(715, true),
    },
    {
      id: 'transactionID',
      key: 'Transaction ID',
      value: 222221111111,
    },
  ];
  useEffect(() => {
    if (selectedValue || props.isOpen) {
      setIsOpen(true);
    }
  }, [selectedValue, props.isOpen]);

  return (
    <Drawer onClose={onCloseDrawer} open={open}>
      <DrawerContent className="mx-auto w-full max-w-md px-5">
        <DrawerHeader>
          <div className="flex justify-between bg-white text-base font-bold">
            <DialogTitle
              className="flex-1 text-center text-lg font-medium"
              level={3}
            >
              {t('checkReceipt')}
            </DialogTitle>
            {/* <Heading
              className="flex-1 text-center text-lg font-medium"
              level={3}
            >
              {t('checkReceipt')}
            </Heading> */}
          </div>
        </DrawerHeader>
        <div className="mx-2 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <StoreInformation
              imageSrc="/images/uniqlo.png"
              storeAdd="Ginza Komatsu East Building 1-12F, 6-9-5 Ginza, Chuo-ku, Tokyo"
              storeName="UNIQLO Ginza"
            />

            <div className="flex h-42 items-center justify-center rounded-sm border border-orange">
              <Heading
                className="text-center text-1422 font-bold text-orange"
                level={3}
              >
                {t('purchaseHistoryHasBeenRegistered')}
              </Heading>
            </div>

            <ItemDetail rows={rows} />
          </div>
        </div>
        <DrawerFooter className="my-5 flex items-center justify-center">
          <Button className="w-fit px-65" onClick={onCloseDrawer}>
            OK
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { DetailBottomDrawer };
