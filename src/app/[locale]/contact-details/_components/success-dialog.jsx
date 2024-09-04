'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components';
import { useTranslations } from 'next-intl';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { cn } from '@/utils';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SuccessDialog = ({ isOpen, form }) => {
  const t = useTranslations('passportInformation');
  const [open, setOpen] = useState();
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (open && form === 'not-complete') {
      setTimeout(() => {
        router.push('/contact-details/completed');
      }, 1000);
    }
  }, [open, form, router]);

  return (
    <AlertDialog open={open} className="">
      <AlertDialogContent
        className={cn('flex justify-between border border-red')}
      >
        <div className={cn('flex flex-col gap-2 items-start')}>
          <AlertDialogTitle className="font-bold">
            {t('success')}
          </AlertDialogTitle>
          <AlertDialogHeader>
            <AlertDialogDescription className="text-1217 font-medium text-gray">
              {t('successInfo')}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <Check
            className={cn(
              'text-white flex items-center justify-center rounded-full bg-red hover:bg-red h-auto p-1',
            )}
            size={30}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SuccessDialog };
