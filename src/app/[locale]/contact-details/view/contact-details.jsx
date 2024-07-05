'use client';

import { useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ContactInform } from '../_components';
import ButtonCertificate from '../_components/button-certificate';
import { SelectOptions } from '../../passport-information/_components';

const ContactDetails = () => {
  const t = useTranslations('contactDetails');
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [isForm, setIsForm] = useState({
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    passportNumber: null,
    dateOfExpiry: null,
    passportIssuingCountry: null,
    countryOfIssueCode: null,
    gender: null,
  });

  const defaultValue = {
    email: 'andreas.andi@talenavi.com',
    phone: '1234567890',
  };

  return (
    <>
      <div className="flex grow flex-col items-center justify-center gap-22 w-full p-28">
        <ContactInform defaultValue={defaultValue} />
      </div>

      <div className="flex grow flex-col gap-22 w-full p-28 text-1422">
        <h1 className="font-medium text-start">{t('proofOfResidence')}</h1>
        <p className="text-left">{t('uploadDocumentInstruction')}</p>
      </div>

      <div className="flex grow flex-col items-center justify-center gap-22 w-full p-28">
        <SelectOptions values={['Document type']} className=" !rounded-[6px]" />

        <ButtonCertificate className="my-[1rem]" />

        <Button
          onClick={() => router.push('/home')}
          className="w-[173px] my-[1rem]"
        >
          {t('save')}
        </Button>
      </div>
    </>
  );
};

export { ContactDetails };
