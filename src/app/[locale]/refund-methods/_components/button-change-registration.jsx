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
import { cn } from '@/utils';

const ButtonChangeRegistration = ({ item }) => {
  const t = useTranslations('refundMethod');
  const { toggleChoose } = useRegistrationOptions();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="absolute right-3 top-3 w-324 min-w-324 cursor-pointer text-end text-1118 text-black underline">
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
        <AlertDialogFooter className="flex items-center justify-center">
          <AlertDialogCancel className={cn('w-111 rounded-6 my-auto')}>
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
