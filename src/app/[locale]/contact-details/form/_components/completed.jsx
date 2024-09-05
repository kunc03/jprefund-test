/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils';
import { SuccessDialog, CompletedFormContactDetails } from '../../_components';
import { Button } from '@/components';
import { contactDetails } from '../../_schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const CompletedForm = () => {
  const t = useTranslations('contactDetails');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactDetails),
    defaultValues: {
      emailAddress: 'andreas.andi@talenavi.com',
      phoneNumber: '',
      buildingNameRoomNumber: 'Aoyama Building 302',
      addressStreet: 'Minami Aoyama, 2-8-14',
      cityCountry: 'Minatoku',
      state: 'Tokyo',
      postCode: '107-0062',
      country: 'Japan',
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
    setIsRequired(true);
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
        <CompletedFormContactDetails
          form={form}
          isButtonDisabled={isButtonDisabled}
          onSubmit={onSubmit}
          isRequired={isRequired}
          defaultValues={form.getValues()}
        >
          <Button
            className={cn('w-173 my-17 ', isButtonDisabled && '!bg-gray-300')}
            disabled={isButtonDisabled}
          >
            {t('update')}
          </Button>
        </CompletedFormContactDetails>
      </div>

      <SuccessDialog isOpen={isSuccess} />
    </div>
  );
};

export { CompletedForm };
