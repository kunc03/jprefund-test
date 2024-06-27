'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { X, ArrowUp, ArrowDown } from 'lucide-react';
import {
  Heading,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Button,
  DatePicker,
} from '@/components';
import { useDrawer } from '@/hooks';

const FilterBottomDrawer = () => {
  const { isOpen, setIsOpen } = useDrawer();
  const onCloseDrawer = () => setIsOpen(false);
  const t = useTranslations('home');

  return (
    <Drawer onClose={onCloseDrawer} open={isOpen}>
      <DrawerContent className="mx-auto w-full max-w-md px-2">
        <DrawerHeader>
          <div className="flex  w-full items-end justify-end">
            <X
              size={24}
              className="cursor-pointer text-gray-105"
              onClick={onCloseDrawer}
            />
          </div>
          <DrawerTitle className="flex justify-between bg-white text-base font-bold">
            <p className="flex-1 text-center text-1822 font-medium">
              {t('searchFilter')}
            </p>
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-3 px-27.5">
          <Heading level={5} className="text-1422 font-medium">
            {t('sort')}
          </Heading>
          <div className="flex cursor-pointer items-center justify-between rounded-4 border border-gray-300 bg-white-dark p-14 hover:border-red">
            <p className="text-1313 font-medium">{t('lowestFirst')}</p>
            <ArrowUp size={24} className="text-gray-105" />
          </div>
          <div className="flex cursor-pointer items-center justify-between rounded-4 border border-gray-300 bg-white-dark p-14 hover:border-red">
            <p className="text-1313 font-medium">{t('highestToLowest')}</p>
            <ArrowDown size={24} className="text-gray-105" />
          </div>

          <div className="flex w-full flex-row justify-between gap-3">
            <DatePicker label={t('startDate')} />
            <DatePicker label={t('endDate')} />
          </div>

          <Heading level={5} className="text-1422 font-medium">
            {t('status')}
          </Heading>

          <div className="flex w-full flex-row justify-between gap-3">
            <div className="w-full cursor-pointer items-center justify-center rounded-4 border border-gray-300 bg-white-dark p-14 hover:border-red">
              <p className="text-center text-1313 font-medium">
                {t('submitted')}
              </p>
            </div>
            <div className="w-full cursor-pointer items-center justify-center rounded-4 border border-gray-300 bg-white-dark p-14  hover:border-red">
              <p className="text-center text-1313 font-medium">
                {t('jcApproval')}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-row justify-between gap-3">
            <div className="w-full cursor-pointer items-center justify-center rounded-4 border border-gray-300 bg-white-dark p-14 hover:border-red">
              <p className="text-center text-1313 font-medium">
                {t('storeApproval')}
              </p>
            </div>
            <div className="w-full cursor-pointer items-center justify-center rounded-4 border border-gray-300 bg-white-dark p-14  hover:border-red">
              <p className="text-center text-1313 font-medium">
                {t('endDate')}
              </p>
            </div>
          </div>
        </div>

        <DrawerFooter className="mt-5 flex flex-col items-center justify-center gap-17">
          <Button className="w-249" variant="outline">
            {t('resetFilter')}
          </Button>
          <Button className="w-249">{t('applyFilter')}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { FilterBottomDrawer };
