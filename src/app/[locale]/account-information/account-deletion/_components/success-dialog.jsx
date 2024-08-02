'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components';
import { useTranslations } from 'next-intl';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

const SuccessDialog = ({ isOpen }) => {
  const t = useTranslations('accountInformation');
  const [open, setOpen] = useState();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className={cn('w-72')}>
        <AlertDialogTitle>{}</AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription
            className={cn('text-center text-1826 font-medium text-gray w-full')}
          >
            {t('accountDeleted')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="w-100 rounded-6"
            onClick={() => router.push('/')}
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SuccessDialog };
