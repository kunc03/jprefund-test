'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { Drawer, DrawerContent, DrawerFooter, Button } from '@/components';
import { useAuth } from '@/hooks';
import { cn } from '@/utils';

const AuthBottomDrawer = () => {
  const [open, setIsOpen] = useState();
  const { auth } = useAuth();

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const t = useTranslations('home');

  useEffect(() => {
    if (auth.status === 'guest') {
      setIsOpen(true);
    }
  }, [auth.status]);

  return (
    <Drawer onClose={onCloseDrawer} open={open} dismissible={false}>
      <DrawerContent
        className={cn('mx-auto w-full max-w-md !rounded-none px-5 h-111 py-8')}
      >
        <div className="w-full text-center text-1422 font-medium">
          {t('youMustLoggedIn')}
        </div>
        <DrawerFooter className="flex flex-row items-center justify-center gap-20">
          <Button
            className="w-154 !rounded-md !px-17.5"
            onClick={onCloseDrawer}
          >
            {t('WhatIsJPrefund')}
          </Button>
          <Button
            className="w-154 !rounded-md !px-17.5"
            onClick={onCloseDrawer}
          >
            {t('signUp')}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { AuthBottomDrawer };
