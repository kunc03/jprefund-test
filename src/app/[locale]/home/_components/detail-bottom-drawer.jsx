'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { useTranslations } from 'next-intl';
import { Heading } from '@/components/heading';
import { StoreInformation } from '@/components/store-information';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/utils/number';
import { ItemDetail } from '@/components/item-detail';

const DetailBottomDrawer = () => {
  const [open, setIsOpen] = useState(true);
  const onCloseDrawer = () => setIsOpen(false);
  const t = useTranslations('home');

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
          <div className="flex text-base font-bold bg-white justify-between">
            <Heading
              level={3}
              className="font-medium text-lg text-center flex-1"
            >
              {t('checkReceipt')}
            </Heading>
            <Image src="/images/close.svg" alt="close" width={16} height={16} />
          </div>
        </DrawerHeader>
        <div className="mx-2 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <StoreInformation
              imageSrc="/images/uniqlo.png"
              storeName="UNIQLO Ginza"
              storeAdd="Ginza Komatsu East Building 1-12F, 6-9-5 Ginza, Chuo-ku, Tokyo"
            />

            <div className="h-10.5 rounded-sm border border-orange flex justify-center items-center">
              <Heading
                level={3}
                className="font-bold text-3sm text-center text-orange"
              >
                {t('purchaseHistoryHasBeenRegistered')}
              </Heading>
            </div>

            <ItemDetail rows={rows} />
          </div>
        </div>
        <DrawerFooter className="flex justify-center items-center mt-5">
          <Button className="w-fit px-[65px]">{t('refundApplication')}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { DetailBottomDrawer };
