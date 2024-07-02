'use client';

import { Button, Input } from '@/components';
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
    <>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={t('enterTransactionNumber')}
        type="text"
        className="!h-42 !rounded-21 p-0 !px-14 !py-13 !text-1616"
      />
      <Button
        aria-hidden="true"
        role="button"
        tabIndex="0"
        key="send"
        disabled={!inputValue}
        className="!h-42 !shrink-0 !px-14 !py-13"
      >
        <Link
          href={{
            pathname: '/home',
            query: { checkreceipt: inputValue },
          }}
        >
          {t('send')}
        </Link>
      </Button>

      {/* {showDetailBottomDrawer === true ? (
        <DetailBottomDrawer isOpen={showDetailBottomDrawer} />
      ) : (
        ''
      )} */}
    </>
  );
};

export { ButtonSend };
