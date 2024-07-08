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
  };

  const [firstName, setFirstName] = useState(defaultValue.firstName);
  const [lastName, setLastName] = useState(defaultValue.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(defaultValue.dateOfBirth);
  const [passportNumber, setPassportNumber] = useState(
    defaultValue.passportNumber,
  );
  const [dateOfExpiry, setDateOfExpiry] = useState(defaultValue.dateOfExpiry);
  const [pasportIssuingCountry, setPassportIssuingCountry] = useState('');
  const [countryOfIssueCode, setCountryOfIssueCode] = useState('');
  const [gender, setGender] = useState('');

  const [isForm, setIsForm] = useState({
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    passportNumber: passportNumber,
    dateOfExpiry: dateOfExpiry,
    passportIssuingCountry: null,
    countryOfIssueCode: null,
    gender: null,
  });

  const hasDateOfBirth = isForm?.dateOfBirth !== defaultValue.dateOfBirth;
  const hasDateOfExpiry = isForm?.dateOfExpiry !== defaultValue.dateOfExpiry;
  const hasPassportIssuing =
    isForm?.passportIssuingCountry !== defaultValue.passportIssuingCountry;
  const hasCountryIssue =
    isForm?.countryOfIssueCode !== defaultValue.countryOfIssueCode;
  const hasGender = isForm?.gender !== defaultValue.gender;

  useEffect(() => {
    isForm;
    setIsDisabled(false);
  }, []);

  useEffect(() => {
    const isChanged =
      firstName !== defaultValue.firstName ||
      lastName !== defaultValue.lastName ||
      hasDateOfBirth ||
      passportNumber !== defaultValue.passportNumber ||
      hasDateOfExpiry ||
      pasportIssuingCountry !== '' ||
      countryOfIssueCode !== '' ||
      gender !== '' ||
      form === 'form-completed';

    setIsDisabled(!isChanged);
  }, [
    firstName,
    lastName,
    dateOfBirth,
    passportNumber,
    dateOfExpiry,
    pasportIssuingCountry,
    countryOfIssueCode,
    gender,
    defaultValue,
  ]);

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

  // useEffect(() => {
  //   if (form === 'form-completed') {
  //     setIsDisabled(true);
  //   }
  // });

  console.log(isForm);

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
          setPassportIssuingCountry={setPassportIssuingCountry}
          setCountryOfIssueCode={setCountryOfIssueCode}
          setGender={setGender}
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
