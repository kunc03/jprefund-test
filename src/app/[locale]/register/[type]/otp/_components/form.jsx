'use client';

import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm, FormField } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components';
import { useFormRef } from '@/hooks';
import { useEffect, useRef, useMemo } from 'react';
import { otpSchema } from '../../../_schemas';

const Form = () => {
  const t = useTranslations('register');
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const otpLength = 6;
  const slots = Array.from({ length: otpLength }, (_, index) => index);

  const defaultValues = useMemo(() => {
    return { otp: '' };
  }, []);

  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues,
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = () => {};

  return (
    <UIForm {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-8 flex w-full flex-col gap-6 "
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <InputOTP
              hasForm
              maxLength={otpLength}
              label={t('form.label.otp')}
              disabled={false}
              {...field}
            >
              <InputOTPGroup className="mx-auto flex max-w-sm flex-row gap-10 px-28 md:px-0">
                {slots.map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="bg-white"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
      </form>
    </UIForm>
  );
};

export { Form };
