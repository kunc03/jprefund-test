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

const SuccessDialog = ({ isOpen }) => {
  const t = useTranslations('register');
  const [open, setOpen] = useState();

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
            {t('alertPhoneArea')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => setOpen(false)}
            className="w-111 rounded-6"
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SuccessDialog };
