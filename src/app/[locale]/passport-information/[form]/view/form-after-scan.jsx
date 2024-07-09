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
    dateOfExpiry: '1997.9.25',
    passportIssuingCountry: 'USA',
    countryOfIssueCode: 'USA',
    gender: 'Male',
  };

  const [firstName, setFirstName] = useState(defaultValue.firstName);
  const [lastName, setLastName] = useState(defaultValue.lastName);
  const [passportNumber, setPassportNumber] = useState(
    defaultValue.passportNumber,
  );

  const [isForm, setIsForm] = useState({
    firstName: defaultValue.firstName,
    lastName: defaultValue.lastName,
    dateOfBirth: defaultValue.dateOfBirth,
    passportNumber: passportNumber,
    dateOfExpiry: defaultValue.dateOfExpiry,
    passportIssuingCountry: defaultValue.passportIssuingCountry,
    countryOfIssueCode: defaultValue.countryOfIssueCode,
    gender: defaultValue.gender,
  });

  const hasDateOfBirth = isForm?.dateOfBirth !== defaultValue.dateOfBirth;
  const hasDateOfExpiry = isForm?.dateOfExpiry !== defaultValue.dateOfExpiry;
  const hasFirstName = isForm?.firstName !== defaultValue.firstName;

  useEffect(() => {
    isForm;
    setIsDisabled(false);
  }, []);

  useEffect(() => {
    const isChanged =
      hasFirstName ||
      lastName !== defaultValue.lastName ||
      hasDateOfBirth ||
      passportNumber !== defaultValue.passportNumber ||
      hasDateOfExpiry ||
      isForm?.passportIssuingCountry !== '' ||
      isForm.countryOfIssueCode !== '' ||
      isForm.gender !== '' ||
      form === 'form-completed';

    setIsDisabled(!isChanged);
  }, [firstName, lastName, passportNumber, defaultValue]);

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

  const handleRescanPassport = () => {
    router.push('/passport-information/scan-your-passport');
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex grow flex-col items-center justify-center gap-22 w-full p-28">
        <FaceRecognition t={t} isOpen={isOpen} form={form} />

        <PassportForm
          t={t}
          formId={isForm}
          setIsForm={setIsForm}
          handleSelectedDateOfBirth={handleSelectedDateOfBirth}
          handleSelectedDateOfExpiry={handleSelectedDateOfExpiry}
          defaultValue={defaultValue}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setPassportNumber={setPassportNumber}
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
          disabled={isDisabled}
          onClick={() =>
            router.push('/passport-information/form/contact-information')
          }
          className={cn('w-[173px]', isDisabled && 'bg-gray-300')}
        >
          {t('save')}
        </Button>
      </div>
    </>
  );
};

export { FormAfterScan };
