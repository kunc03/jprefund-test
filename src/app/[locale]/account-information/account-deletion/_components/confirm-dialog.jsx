'use client';

import { useEffect } from 'react';
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

const ConfirmDialog = ({ isConfirm, setIsConfirm, setIsSuccess }) => {
  const t = useTranslations('accountInformation');

  useEffect(() => {
    if (isConfirm) {
      setIsConfirm(true);
    }
  }, [isConfirm, setIsConfirm]);

  const handleSuccess = () => {
    if (isConfirm) {
      setIsSuccess(true);
      setIsConfirm(false);
    }
  };

  return (
    <AlertDialog open={isConfirm}>
      <AlertDialogContent className={cn('w-72')}>
        <AlertDialogTitle>{}</AlertDialogTitle>
        <AlertDialogHeader>
          <AlertDialogDescription
            className={cn('text-center text-1826 font-medium text-gray w-full')}
          >
            {t('doYouReallyWantToDelete')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="w-100 rounded-6 bg-gray-300 hover:bg-gray-400"
            onClick={() => setIsConfirm(false)}
          >
            {t('cancel')}
          </AlertDialogAction>
          <AlertDialogAction
            className="w-100 rounded-6"
            onClick={handleSuccess}
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { ConfirmDialog };
