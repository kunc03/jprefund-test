/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components';
// import { useSearchParams } from 'next/navigation';
import { contactDetails } from '../../_schemas';
import { FormContactDetails } from '../../_components/form-contact-details';
// import { SelectOptions } from '@/app/[locale]/passport-information/_components';
import { SuccessDialog } from '../../_components';

const NotCompleteForm = () => {
  const t = useTranslations('contactDetails');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactDetails),
    defaultValues: {
      emailAddress: '',
      phoneNumber: '',
      buildingNameRoomNumber: '',
      addressStreet: '',
      cityCountry: '',
      state: '',
      postCode: '',
      country: '',
    },
  });

  useEffect(() => {
    setIsSuccess(false);
  });

  const { formState, reset } = form;
  const { isDirty } = formState;

  useEffect(() => {
    setIsButtonDisabled(true);
    if (isDirty) {
      setIsButtonDisabled(!isDirty);
    }
  }, [isDirty, setIsButtonDisabled]);

  const onSubmit = (values) => {
    setIsSuccess(true);
    setTimeout(() => {
      reset(values);
      setIsButtonDisabled(true);
    }, 1000);
  };

  return (
    <div className="h-dvh">
      <div
        className={cn(
          'flex grow flex-col items-center justify-center gap-22 w-full p-28',
        )}
      >
        <FormContactDetails
          form={form}
          isButtonDisabled={isButtonDisabled}
          onSubmit={onSubmit}
        >
          <Button
            className={cn('w-173 my-17 ', isButtonDisabled && '!bg-gray-300')}
            disabled={isButtonDisabled}
          >
            {t('send')}
          </Button>
        </FormContactDetails>
      </div>

      <SuccessDialog isOpen={isSuccess} form="not-complete" />
    </div>
  );
};

export { NotCompleteForm };
