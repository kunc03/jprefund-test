'use client';

import { useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ContactInform, FaceRecognition, PassportForm } from '../_components';
import { Contact } from 'lucide-react';
// import { FaceRecognition } from './face-recognition';
// import { PassportForm } from './form-passport-after-scan';

const ContactInformation = () => {
  const t = useTranslations('passportInformation');
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

  const handleSelectedDateOfBirth = (date) => {
    setFiler((old) => {
      return { ...old, dateOfBirth: date };
    });
  };

  const handleSelectedDateOfExpiry = (date) => {
    setFiler((old) => {
      return { ...old, dateOfExpiry: date };
    });
  };

  const hasDateOfBirth = isForm?.dateOfBirth !== null;
  const hasDateOfExpiry = isForm?.dateOfExpiry !== null;

  // const handleFaceRecognition = () => {
  //   router.push('/passport-information/take-portrait');
  //   // setIsOpen(true);
  // };

  const handleRescanPassport = () => {
    router.push('/passport-information/scan-your-passport');
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex grow flex-col items-center justify-center gap-22 w-full p-28">
        <ContactInform />
      </div>

      <div className="flex flex-col w-full items-center justify-center pb-54 gap-[54px]">
        <button
          onClick={handleRescanPassport}
          className="text-red text-16 font-bold underline underline-offset-4"
        >
          {t('rescanYourPassport')}
        </button>

        <Button
          onClick={() =>
            router.push('/passport-information/form/contact-information')
          }
          className="w-249"
        >
          {t('save')}
        </Button>
      </div>
    </>
  );
};

export { ContactInformation };
