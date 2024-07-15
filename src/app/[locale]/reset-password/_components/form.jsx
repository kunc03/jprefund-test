'use client';

import { Heading, Input } from '@/components';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormRef } from '@/hooks';
import { Form as UIForm, FormField } from '@/components/ui/form';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { emailSchema, phoneSchema } from '../_schemas';
import InputPhone from './input-phone';

const Form = () => {
  const pathname = usePathname();
  const router = useRouter();
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const [resetType, setResetType] = useState(null);
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();
  const t = useTranslations('resetPassword');

  useEffect(() => {
    if (pathname === '/reset-password/phone') {
      setResetType('phone');
    } else if (pathname === '/reset-password/email') {
      setResetType('email');
    }
  }, [pathname]);

  const registerSchema = resetType === 'email' ? emailSchema : phoneSchema;

  const defaultValues = useMemo(() => {
    if (resetType === 'phone') {
      return { phone: '' };
    }
    return { email: '' };
  }, [resetType]);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = (data) => {
    if (resetType === 'email' && registerSchema && data.email) {
      router.push('/reset-password/email/verification');
    } else if (resetType === 'phone' && data.phone && data.length >= 10) {
      router.push('/reset-password/phone/verification');
    }
  };

  return (
    <>
      <Heading
        className="mt-23 text-center text-2122 font-medium"
        key="createAccount"
      >
        {t('title')}
      </Heading>

      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-7 flex w-full flex-col gap-6"
        >
          {resetType === 'email' && (
            <>
              <p className={cn('text-1522 text-center mb-8')}>
                {t('resetByEmail')}
              </p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <Input
                    hasForm
                    label={t('form.label.email')}
                    className={cn('!border rounded-6')}
                    placeholder={t('form.placeholder.email')}
                    disabled={false}
                    {...field}
                  />
                )}
              />
            </>
          )}
          {resetType === 'phone' && (
            <>
              <p className={cn('text-1522 text-center mb-8')}>
                {t('resetByPhone')}
              </p>

              <Heading level={5} className="text-1622 font-medium">
                {t('form.label.phone')}
              </Heading>
              <InputPhone
                setSelectedPhoneArea={setSelectedPhoneArea}
                selectedPhoneArea={selectedPhoneArea}
              />
            </>
          )}
        </form>
      </UIForm>
    </>
  );
};

export { Form };
