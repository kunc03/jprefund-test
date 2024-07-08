'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FaceRecognition, PassportForm } from '../_components';
import { cn } from '@/utils';

const FormAfterScan = ({ form }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const defaultValue = {
    firstName: 'Joni',
    lastName: 'Mitchell',
    dateOfBirth: '1997.9.25',
    passportNumber: '00000000',
  };

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

  const handleSelectedDateOfBirth = (date) => {
    setIsForm((old) => {
      return { ...old, dateOfBirth: date };
    });
  };

  const handleSelectedDateOfExpiry = (date) => {
    setIsForm((old) => {
      return { ...old, dateOfExpiry: date };
    });
  };

  const hasDateOfBirth = isForm?.dateOfBirth !== null;
  const hasDateOfExpiry = isForm?.dateOfExpiry !== null;

  const handleRescanPassport = () => {
    router.push('/passport-information/scan-your-passport');
    setIsOpen(false);
  };

  useEffect(() => {
    if (form === 'form-completed') {
      setIsDisabled(true);
    }
  });

  console.log(isForm);

  return (
    <>
      <div className="flex grow flex-col items-center justify-center gap-22 w-full p-28">
        <FaceRecognition t={t} isOpen={isOpen} form={form} />

        <PassportForm
          t={t}
          formId={isForm}
          handleSelectedDateOfBirth={handleSelectedDateOfBirth}
          handleSelectedDateOfExpiry={handleSelectedDateOfExpiry}
          hasDateOfBirth={hasDateOfBirth}
          hasDateOfExpiry={hasDateOfExpiry}
          defaultValue={defaultValue}
        />
      </div>

      <div className="flex flex-col w-full items-center justify-center pb-54 gap-[54px]">
        <button
          onClick={handleRescanPassport}
          className="text-red text-16 font-bold underline underline-offset-4"
        >
          {t('rescanYourPassport')}
        </button>

        <Button
          disabled={!isDisabled}
          onClick={() =>
            router.push('/passport-information/form/contact-information')
          }
          className={cn('w-[173px]', !isDisabled && 'bg-gray-300')}
        >
          {t('save')}
        </Button>
      </div>
    </>
  );
};

export { FormAfterScan };
