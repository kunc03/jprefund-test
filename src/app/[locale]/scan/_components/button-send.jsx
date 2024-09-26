'use client';

import { Button, Input } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { useState } from 'react';

const ButtonSend = () => {
  const t = useTranslations('scan');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={cn('flex gap-2 w-full')}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={t('enterTransactionNumber')}
        type="number"
        className={cn('!h-42 !rounded-21 text-center !px-14 !py-13 !text-1616')}
      />
      <Button
        aria-hidden="true"
        role="button"
        tabIndex="0"
        key="send"
        className="!h-42 !shrink-0 !px-14 !py-13"
      >
        <Link
          href={{
            pathname: '/home',
            query: {
              checkreceipt: inputValue,
            },
          }}
        >
          {t('send')}
        </Link>
      </Button>
    </div>
  );
};

export { ButtonSend };
