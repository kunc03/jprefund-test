'use client';

import {
  Form as UIForm,
  Heading,
  RadioGroupItem,
  RadioGroup,
  FormField,
  Button,
} from '@/components';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { cashLessSchema } from '../_schemas';

const ContentCashLess = () => {
  const t = useTranslations('refundMethod');
  const formRef = useRef();

  const form = useForm({
    resolver: zodResolver(cashLessSchema),
    defaultValues: {
      type: '',
    },
  });

  const handleLoginClick = () => {
    formRef.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  // const handleSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="flex w-full grow flex-col items-center gap-145 px-29">
      <div className="mt-40 w-full">
        <Heading className="text-center text-1527 font-medium">
          {t('chooseYourService')}
        </Heading>
        <UIForm {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit()} className="mt-46">
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
                    <RadioGroupItem value="fullRefund">
                      Full Refund
                    </RadioGroupItem>
                    <RadioGroupItem value="partialRefund">
                      Partial Refund
                    </RadioGroupItem>
                  </RadioGroup>
                );
              }}
            />
          </form>
        </UIForm>
      </div>
      <Button className="w-145" onClick={handleLoginClick}>
        {t('registration')}
      </Button>
    </div>
  );
};

export { ContentCashLess };
