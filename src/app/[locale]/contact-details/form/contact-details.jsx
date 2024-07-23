/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { SelectOptions } from '../../passport-information/_components';
import { cn } from '@/utils';
import { FormContactDetails } from '../_components/form-contact-details';
import { ButtonCertificate, SuccessDialog } from '../_components';
import { contactDetails } from '../_schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components';
import { useSearchParams } from 'next/navigation';

const ContactDetails = () => {
  const t = useTranslations('contactDetails');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const searchParams = useSearchParams();
  const [sParam, setSParam] = useState('');

  const form = useForm({
    resolver: zodResolver(contactDetails),
    defaultValues: {
      emailAddress: 'andreas.andi@talenavi.com',
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

  useEffect(() => {
    const s = searchParams.get('s');
    setSParam(s || '');
  }, [searchParams]);

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
    <div className="">
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
          <div className="flex w-full grow flex-col gap-10 text-1422">
            <h1 className="text-start font-medium">{t('proofOfResidence')}</h1>
            <p className="text-left">{t('uploadDocumentInstruction')}</p>
          </div>

          <div
            className={cn(
              'flex grow flex-col items-center justify-center gap-22 w-full',
            )}
          >
            <SelectOptions
              values={[t('documentType')]}
              className=" !rounded-[6px]"
            />

            <div className={cn('w-full flex flex-col gap-10')}>
              <h2 className="text-1622">{t('id')}</h2>
              <ButtonCertificate className="w-auto" sParam={sParam} />
            </div>
          </div>

          <Button
            className={cn('w-173 my-17 ', isButtonDisabled && '!bg-gray-300')}
            disabled={isButtonDisabled}
          >
            {t('save')}
          </Button>
        </FormContactDetails>
      </div>

      <SuccessDialog isOpen={isSuccess} />
    </div>
  );
};

export { ContactDetails };
