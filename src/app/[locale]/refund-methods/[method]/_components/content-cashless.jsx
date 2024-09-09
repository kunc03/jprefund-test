'use client';

import {
  Form as UIForm,
  Heading,
  RadioGroupItem,
  RadioGroup,
  FormField,
  Button,
  Header,
} from '@/components';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { cashLessSchema } from '../_schemas';
import { useRegistrationOptions } from '../../_hooks/use-registration-options';
import { SuccessDialog } from './success-dialog';
import { useRouter } from 'next/navigation';

const CONTACTLESS_METHODS = [
  {
    id: 1,
    value: 'alipay',
    name: 'Alipay',
  },
  {
    id: 2,
    value: 'weChatPay',
    name: 'WeChatPay',
  },
];
const ContentCashLess = () => {
  const t = useTranslations('refundMethod');
  const formRef = useRef();
  const { setData } = useRegistrationOptions();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  const form = useForm({
    resolver: zodResolver(cashLessSchema),
    defaultValues: {
      type: '',
    },
  });

  useEffect(() => {
    const isFilled = Object.values(form.getValues()).every(
      (value) => value !== '',
    );
    setIsAllFieldsFilled(isFilled);
  }, [form.watch()]);

  const handleSubmitClick = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  const handleSubmit = (data) => {
    // todo integratin witha api
    setData('3', data);
    setIsSuccess(true);
  };

  return (
    <>
      <Header
        hasBack
        title={!isAllFieldsFilled ? t('addDigitalWallet') : t('title')}
      />
      <div className="flex w-full grow flex-col items-center gap-145 px-29">
        <div className="mt-40 w-full">
          <Heading className="text-center text-1527 font-medium">
            {t('selectYourOption')}
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
                  return (
                    <RadioGroup
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      aria-label="Refund Type"
                      className="flex w-full flex-col gap-30"
                    >
                      {CONTACTLESS_METHODS.map((item) => (
                        <RadioGroupItem
                          key={item.id}
                          value={item.value}
                          selectedValue={field.value}
                          label={item.name}
                        />
                      ))}
                    </RadioGroup>
                  );
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
          {t('add')}
        </Button>
      </div>
      <SuccessDialog
        isOpen={isSuccess}
        type="digitalWallet"
        onHandleClose={() => router.push('/refund-methods')}
      />
    </>
  );
};

export { ContentCashLess };
