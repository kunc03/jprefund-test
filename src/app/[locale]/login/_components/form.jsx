'use client';

import { useTranslations } from 'next-intl';
import { loginSchema } from '../_schemas/login-schema';
import { Heading } from '@/components/heading';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm, FormField, Input } from '@/components';
import { useFormRef } from '@/hooks';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Form = () => {
  const t = useTranslations('login');
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      // email: '',
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
    <div className="mt-9 flex w-full flex-col px-7">
      {/* <Heading className="mb-5 text-center text-3xl font-medium">
        {t('title')}
      </Heading> */}

      <Heading className="mb-5 text-center text-2122 font-medium">
        {t('form.label.password')}
      </Heading>

      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full flex-col gap-6"
        >
          {/* EMail */}
          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                hasForm
                label={t('form.label.email')}
                placeholder={t('form.placeholder.email')}
                disabled={false}
                {...field}
              />
            )}
          /> */}

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
            <p className="mt-2 text-end text-1522 font-medium">
              {t('form.label.forgetPass')}
            </p>
          </div>
        </form>
      </UIForm>
    </div>
  );
};

export { Form };
