'use client';

import { Heading } from '@/components';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormRef } from '@/hooks';
import { Form as UIForm } from '@/components/ui/form';
import { useTranslations } from 'next-intl';
import { emailSchema, passwordSchema, phoneSchema } from '../_schemas';
import { FormResetting } from './_components/form-resetting';

const Form = () => {
  const pathname = usePathname();
  const router = useRouter();
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const [resetType, setResetType] = useState(null);
  const t = useTranslations('resetPassword');
  const [title, setTitle] = useState('title');

  useEffect(() => {
    if (pathname === '/reset-password/phone') {
      setResetType('phone');
    } else if (pathname === '/reset-password/email') {
      setResetType('email');
    } else if (pathname === '/reset-password/resetting') {
      setResetType('resetting');
      setTitle('passwordSetting');
    }
  }, [pathname]);

  const resetSchema = useMemo(() => {
    if (resetType === 'email') {
      return emailSchema;
    }
    if (resetType === 'phone') {
      return phoneSchema;
    }
    if (resetType === 'resetting') {
      return passwordSchema;
    }
    return null;
  }, [resetType]);

  const defaultValues = useMemo(() => {
    if (resetType === 'phone') {
      return { phone: '' };
    }
    if (resetType === 'resetting') {
      return {
        newPassword: '',
        passwordConfirmation: '',
      };
    }
    return { email: '' };
  }, [resetType]);

  const form = useForm({
    resolver: zodResolver(resetSchema),
    defaultValues,
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = (data) => {
    if (resetType === 'email' && resetSchema && data.email) {
      router.push('/reset-password/email/verification');
    } else if (resetType === 'phone' && data.phone) {
      router.push('/reset-password/phone/verification');
    } else if (resetType === 'resetting') {
      router.push('/reset-password/completed');
    }
  };

  return (
    <>
      <Heading
        className="mt-23 text-center text-2122 font-medium"
        key="createAccount"
      >
        {t(title)}
      </Heading>

      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full flex-col gap-6"
        >
          <FormResetting form={form} t={t} resetType={resetType} />
        </form>
      </UIForm>
    </>
  );
};

export { Form };
