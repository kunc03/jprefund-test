'use client';

import React from 'react';
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

const ButtonChangeRegistration = ({ item }) => {
  const t = useTranslations('refundMethod');
  const { toggleChoose } = useRegistrationOptions();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="absolute right-3 top-3 w-324 min-w-324 cursor-pointer text-1118 text-black underline text-end">
          {t('changeRefundMethod')}
        </p>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-324">
        <AlertDialogTitle>{}</AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription className="text-center text-1822 font-medium text-gray">
            {t('changeConfirmation', { name: t(item.type) })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-111 rounded-6">
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-111 rounded-6"
            onClick={() => toggleChoose(item.id)}
          >
            {t('ok')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { ButtonChangeRegistration };
