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

const ErrorDialog = ({ isOpen }) => {
  const t = useTranslations('passportInformation');
  const [open, setOpen] = useState();

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  const notes = ['terrorist'];

  return (
    <AlertDialog open={open} className="">
      <AlertDialogContent className={cn('flex flex-col justify-between')}>
        <div className={cn('flex flex-col')}>
          <AlertDialogHeader>
            <AlertDialogTitle
              className={cn('text-1826 font-medium text-gray')}
            />
            <AlertDialogDescription
              className={cn('font-medium text-gray flex flex-col p-5')}
            >
              {notes.map((note) => (
                <span className={cn('text-1626 text-center')} key={note}>
                  {t(note)}
                </span>
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <Button
            onClick={() => setOpen(false)}
            className={cn('!rounded-6 w-100')}
          >
            OK
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { ErrorDialog };
