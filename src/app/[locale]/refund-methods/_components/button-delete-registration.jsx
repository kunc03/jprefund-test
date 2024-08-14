'use client';

import React from 'react';
import { TrashIcon } from './trash-icon';
import { useTranslations } from 'next-intl';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { useRegistrationOptions } from '../_hooks/use-registration-options';
import { cn } from '@/utils';

const ButtonDeleteRegistration = ({ item }) => {
  const t = useTranslations('refundMethod');
  const { deleteData } = useRegistrationOptions();

  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          className={cn(
            'flex cursor-pointer flex-row items-center justify-between gap-11',
          )}
        >
          <p className="text-1212 font-bold">{t('delete')}</p>
          <TrashIcon />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>{}</AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription className="text-center text-1822 font-medium text-gray">
            {t('deleteConfirmation', { name: t(item.type) })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-111 rounded-6">
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-111 rounded-6"
            onClick={() => handleDelete(item.id)}
          >
            {t('ok')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { ButtonDeleteRegistration };
