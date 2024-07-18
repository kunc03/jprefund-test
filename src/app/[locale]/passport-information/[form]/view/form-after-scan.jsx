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

  const [isFirstName, setIsFirstName] = useState(defaultValue.firstName);
  const [isLastName, setIsLastName] = useState(defaultValue.lastName);
  const [isPassportNumber, setIsPassportNumber] = useState(
    defaultValue.passportNumber,
  );

  const [isForm, setIsForm] = useState({
    firstName: isFirstName,
    lastName: isLastName,
    passportNumber: isPassportNumber,
    dateOfBirth: defaultValue.dateOfBirth,
    dateOfExpiry: defaultValue.dateOfExpiry,
    passportIssuingCountry: defaultValue.passportIssuingCountry,
    countryOfIssueCode: defaultValue.countryOfIssueCode,
    gender: defaultValue.gender,
  });

  useEffect(() => {
    const isChanged =
      isForm?.firstName !== defaultValue.firstName ||
      isForm?.lastName !== defaultValue.lastName ||
      isForm?.dateOfBirth !== defaultValue.dateOfBirth ||
      isForm?.passportNumber !== defaultValue.passportNumber ||
      isForm?.dateOfExpiry !== defaultValue.dateOfExpiry ||
      isForm?.passportIssuingCountry !== defaultValue.passportIssuingCountry ||
      isForm?.countryOfIssueCode !== defaultValue.countryOfIssueCode ||
      isForm?.gender !== defaultValue.gender ||
      form === 'form-completed';

    setIsDisabled(!isChanged);
  }, [isForm]);

  useEffect(() => {
    setIsSuccess(false);
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

  const handleRescanPassport = () => {
    router.push('/passport-information/scan-your-passport');
  };

  const handleClickSave = () => {
    setIsSuccess(true);
    setIsDisabled(true);
  };

  return (
    <>
      <div className="flex w-full grow flex-col items-center justify-center gap-22 p-28">
        <FaceRecognition t={t} form={form} />

        <PassportForm
          t={t}
          formId={isForm}
          setIsForm={setIsForm}
          handleSelectedDateOfBirth={handleSelectedDateOfBirth}
          handleSelectedDateOfExpiry={handleSelectedDateOfExpiry}
          defaultValue={defaultValue}
          setFirstName={setIsFirstName}
          setLastName={setIsLastName}
          setPassportNumber={setIsPassportNumber}
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
