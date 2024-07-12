'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { X } from 'lucide-react';
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
import { SelectOptions } from './select';
import { cn } from '@/utils';

const FilterBottomDrawer = () => {
  const { isOpen, setIsOpen } = useDrawer();
  // const [isSelected] = useState();
  const onCloseDrawer = () => setIsOpen(false);
  const t = useTranslations('home');
  const [filter, setFilter] = useState({
    status: null,
    sort: null,
    startDate: null,
    endDate: null,
  });

  const handleSelectedEndDate = (date) => {
    setFilter((old) => {
      return { ...old, endDate: date };
    });
  };
  const handleSelectedStartDate = (date) => {
    setFilter((old) => {
      return { ...old, startDate: date };
    });
  };

  const handleSelectedStatus = (value) => {
    setFilter((old) => {
      return { ...old, status: value };
    });
  };

  const handleResetFilter = () => {
    setFilter({
      status: null,
      startDate: null,
      endDate: null,
    });
  };
  const hasStartDate = filter?.startDate !== null;
  const hasEndDate = filter?.endDate !== null;
  const hasStatus = filter?.status !== null;

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

        <div className={cn('flex flex-col px-27.5 gap-5')}>
          {/* Status */}
          <div className="flex flex-col gap-3">
            <Heading level={5} className="text-1422 font-medium">
              {t('status')}
            </Heading>

            <SelectOptions
              t={t}
              handleChange={handleSelectedStatus}
              values={['submitted', 'jcApproval', 'storeApproval']}
              selectedDate={filter?.status}
              isSelected={hasStatus}
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-3">
            <Heading level={5} className="text-1422 font-medium">
              {t('period')}
            </Heading>
            <div className="flex w-full flex-row justify-between gap-3">
              <DatePicker
                label={t('startDate')}
                onHandleSelected={handleSelectedStartDate}
                selectedDate={filter?.startDate}
                isSelected={hasStartDate}
              />
              <DatePicker
                label={t('endDate')}
                onHandleSelected={handleSelectedEndDate}
                selectedDate={filter?.endDate}
                isSelected={hasEndDate}
              />
            </div>
          </div>
          {/* Date end */}
        </div>

        <DrawerFooter className="my-10 flex flex-col items-center justify-center gap-17">
          <Button
            className="w-249"
            variant="outline"
            onClick={handleResetFilter}
          >
            {t('resetFilter')}
          </Button>
          <Button className="w-249">{t('applyFilter')}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { FilterBottomDrawer };
