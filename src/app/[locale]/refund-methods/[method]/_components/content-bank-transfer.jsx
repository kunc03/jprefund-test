'use client';

import { Heading, Button, Form as UIForm, FormField } from '@/components';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { useRegistrationOptions } from '../../_hooks/use-registration-options';
import { SuccessDialog } from './success-dialog';
import { useRouter } from 'next/navigation';
import { creditCardSchema } from '../_schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ContentBankTransfer = () => {
  const t = useTranslations('refundMethod');
  const formRef = useRef();
  const { setData } = useRegistrationOptions();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      type: '',
    },
  });

  const handleSubmitClick = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  const handleSubmit = (data) => {
    // todo integratin witha api
    setData('2', data);
    setIsSuccess(true);
  };

  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-145 px-29">
        <div className="mt-40 w-full">
          <Heading className="text-center text-1527 font-medium">
            {t('chooseYourService')}
          </Heading>
          <UIForm {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(handleSubmit)}
              className="mt-46"
            >
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => {
                  return <div {...field}>asd</div>;
                }}
              />
            </form>
          </UIForm>
        </div>
        <Button
          className="w-173"
          onClick={handleSubmitClick}
          disabled={!form.formState.isValid}
        >
          {t('registration')}
        </Button>
      </div>
      <SuccessDialog
        isOpen={isSuccess}
        type="bankTransfer"
        onHandleClose={() => router.push('/refund-methods')}
      />
    </>
  );
};

export { ContentBankTransfer };
