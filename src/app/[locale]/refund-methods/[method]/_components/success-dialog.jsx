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
import { useRouter } from 'next/navigation';

const SuccessDialog = ({ type, isOpen, onHandleClose }) => {
  const t = useTranslations('refundMethod');
  const [open, setOpen] = useState();
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
        onHandleClose();
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [open, onHandleClose]);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogTitle>{}</AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription className="text-center text-1826 font-medium text-gray">
            {t('registrationCompleted', { name: t(type) })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="w-111 rounded-6"
            onClick={() => router.push('/refund-methods')}
          >
            {t('ok')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SuccessDialog };
