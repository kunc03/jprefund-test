'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
} from '@/components';
import { useTranslations } from 'next-intl';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

const SuccessDialog = ({ isOpen, form }) => {
  const t = useTranslations('passportInformation');
  const [open, setOpen] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   let timer;
  //   if (open) {
  //     timer = setTimeout(() => {
  //       setOpen(false);
  //     }, 2000);
  //   }

  //   return () => clearTimeout(timer);
  // }, [open]);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  const notes = [
    'notifSend.1',
    'notifSend.2',
    'notifSend.3',
    'notifSend.4',
    'notifSend.5',
  ];

  const handleClickSave = () => {
    if (form === 'not-complete') {
      router.push('/passport-information/pending');
    }
  };

  return (
    <AlertDialog open={open} className="">
      <AlertDialogContent className={cn('flex flex-col justify-between w-324')}>
        <div className={cn('flex flex-col items-start')}>
          <AlertDialogHeader>
            <AlertDialogTitle
              className={cn('text-1826 font-medium text-gray')}
            />
            <AlertDialogDescription
              className={cn('font-medium text-gray flex flex-col')}
            >
              {notes.map((note) => (
                <span className=" text-center" key={note}>
                  {t(note)}
                </span>
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <Button
            onClick={() => setOpen(false)}
            className={cn('!rounded-6 w-100 bg-gray-300 hover:bg-gray-400')}
          >
            {t('cancel')}
          </Button>
          <Button onClick={handleClickSave} className={cn('!rounded-6 w-100')}>
            OK
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { SuccessDialog };
