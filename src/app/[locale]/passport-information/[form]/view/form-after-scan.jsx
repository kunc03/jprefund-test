/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FaceRecognition, PassportForm } from '../_components';
import { cn } from '@/utils';
import { SuccessDialog } from '../_components/success-dialog';

const FormAfterScan = ({ form }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
    passportNumber,
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

  const handleClickSave = () => {
    setIsSuccess(true);
  };

  useEffect(() => {
    setIsSuccess(false);
  });

  useEffect(() => {
    const isChanged =
      hasFirstName ||
      lastName !== defaultValue.lastName ||
      hasDateOfBirth ||
      passportNumber !== defaultValue.passportNumber ||
      hasDateOfExpiry ||
      isForm?.passportIssuingCountry !== defaultValue.passportIssuingCountry ||
      isForm.countryOfIssueCode !== defaultValue.countryOfIssueCode ||
      isForm.gender !== defaultValue.gender ||
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
      <div className="flex w-full grow flex-col items-center justify-center gap-22 p-28">
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

      <div className="flex w-full flex-col items-center justify-center gap-[54px] pb-54">
        <Button
          onClick={handleRescanPassport}
          className={cn(
            'text-16 font-bold bg-transparent hover:!bg-transparent text-red underline underline-offset-4',
          )}
        >
          {t('rescanYourPassport')}
        </Button>

        <Button
          disabled={isDisabled}
          onClick={handleClickSave}
          className={cn('w-173', isDisabled && 'bg-gray-300')}
        >
          {t('save')}
        </Button>
      </div>
      <SuccessDialog isOpen={isSuccess} />
    </>
  );
};

export { FormAfterScan };
