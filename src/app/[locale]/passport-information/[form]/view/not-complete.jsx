'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { FaceRecognition, PassportForm } from '../_components';
import { cn } from '@/utils';
import { SuccessDialog } from '../_components/success-dialog';

const NotComplete = ({
  form,
  setIsForm,
  isForm,
  defaultValue,
  setIsFirstName,
  setIsLastName,
  setIsPassportNumber,
}) => {
  const t = useTranslations('passportInformation');

  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleClickSave = () => {
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess === true) {
      setIsSuccess(false);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="flex w-full grow flex-col items-center justify-center gap-22 p-28">
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

        <FaceRecognition t={t} form={form} />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-[54px] pb-54">
        {form === 'form' ? (
          <Button className={cn('w-173')} disabled>
            {t('send')}
          </Button>
        ) : (
          <Button onClick={handleClickSave} className={cn('w-173')}>
            {t('send')}
          </Button>
        )}
      </div>
      <SuccessDialog isOpen={isSuccess} form={form} />
    </>
  );
};

export { NotComplete };
