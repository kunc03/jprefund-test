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
import { StatusOption } from './status-option';

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
      sort: null,
      startDate: null,
      endDate: null,
    });
  };

  // const hasSubmitted = filter?.status === 'submitted' ?? false;
  // const hasJacApproval = filter?.status === 'jcApproval' ?? false;
  // const hasStoreApproval = filter?.status === 'storeApproval' ?? false;
  // const hasStatusEndDate = filter?.status === 'endDate' ?? false;

  const hasStartDate = filter?.startDate !== null;
  const hasEndDate = filter?.endDate !== null;

  console.log(filter);

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
          {/* Status start */}
          <Heading level={5} className="text-1422 font-medium">
            {t('status')}
          </Heading>

          <StatusOption
            t={t}
            selectedDate={filter?.status}
            handleSelectedStatus={handleSelectedStatus}
            filter={filter?.status}
            setFilter={setFilter}
          />

          {/* <div className="flex w-full flex-row justify-between gap-3">
            <ItemFilter
              label={t('submitted')}
              className="w-full !items-center !justify-center"
              onHandleClick={() =>
                handleSelectedStatus(
                  filter?.status === 'submitted' ? null : 'submitted',
                )
              }
              isSelected={hasSubmitted}
            />

            <ItemFilter
              label={t('jcApproval')}
              className="w-full !items-center !justify-center"
              onHandleClick={() =>
                handleSelectedStatus(
                  filter?.status === 'jcApproval' ? null : 'jcApproval',
                )
              }
              isSelected={hasJacApproval}
            />
          </div> */}

          {/*   <div className="flex w-full flex-row justify-between gap-3">
            <ItemFilter
              label={t('storeApproval')}
              className="w-full !items-center !justify-center"
              onHandleClick={() =>
                handleSelectedStatus(
                  filter?.status === 'storeApproval' ? null : 'storeApproval',
                )
              }
              isSelected={hasStoreApproval}
            />
            <ItemFilter
              label={t('endDate')}
              className="w-full !items-center !justify-center"
              onHandleClick={() =>
                handleSelectedStatus(
                  filter?.status === 'endDate' ? null : 'endDate',
                )
              }
              isSelected={hasStatusEndDate}
            />
          </div> */}
          {/* Status end */}

          {/* Date */}
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
          {/* Date end */}
        </div>

        <DrawerFooter className="mt-5 flex flex-col items-center justify-center gap-17">
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
