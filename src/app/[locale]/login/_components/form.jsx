'use client';

import { useTranslations } from 'next-intl';
import { loginSchema } from '../_schemas/login-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm, FormField, Input } from '@/components';
import { useFormRef } from '@/hooks';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils';
import Link from 'next/link';

const Form = () => {
  const t = useTranslations('login');
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
    },
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = () => {
    router.push('/home');
  };

  return (
    <div className="mt-8 flex w-full flex-col px-7">
      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full flex-col gap-6"
        >
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <Input
                  hasForm
                  label={t('form.label.password')}
                  placeholder={t('form.placeholder.password')}
                  disabled={false}
                  {...field}
                  type="password"
                />
              )}
            />
            <Link
              href="/reset-password/email"
              className={cn('mt-2 w-full text-end text-1522 font-medium')}
            >
              {t('form.label.forgetPass')}
            </Link>
          </div>
        </form>
      </UIForm>
    </div>
  );
};

export { Form };
