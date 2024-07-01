'use client';

import Image from 'next/image';
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
} from '@/components';
import { useQrScan } from '@/hooks';
import { formatNumber } from '@/utils';

const DetailBottomDrawer = () => {
  const [open, setIsOpen] = useState(false);
  const onCloseDrawer = () => setIsOpen(false);
  const t = useTranslations('home');
  const { selectedValue } = useQrScan();

  useEffect(() => {
    if (selectedValue) {
      setIsOpen(true);
    }
  }, [selectedValue]);

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

  return (
    <Drawer onClose={onCloseDrawer} open={open}>
      <DrawerContent className="mx-auto w-full max-w-md px-2">
        <DrawerHeader>
          <div className="flex justify-between bg-white text-base font-bold">
            <Heading
              className="flex-1 text-center text-lg font-medium"
              level={3}
            >
              {t('checkReceipt')}
            </Heading>
            <Image
              alt="close"
              className="cursor-pointer"
              height={16}
              onClick={onCloseDrawer}
              src="/images/close.svg"
              width={16}
            />
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
        <DrawerFooter className="mt-5 flex items-center justify-center">
          <Button className="w-fit px-65">{t('refundApplication')}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { DetailBottomDrawer };
