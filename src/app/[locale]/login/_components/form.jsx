'use client';

import { useTranslations } from 'next-intl';
import { loginSchema } from '../schemas/login-schema';
import { Heading } from '@/components/heading';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormLogin } from '../_hooks/use-form-login';
import { useEffect, useRef } from 'react';

const Form = () => {
  const t = useTranslations('login');
  const formRef = useRef();
  const { setFormRef } = useFormLogin();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    console.log(formRef.current);
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <div className="flex flex-col mt-9 w-full px-7">
      <Heading className="font-medium text-3xl text-center mb-5">
        {t('title')}
      </Heading>

      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col w-full gap-6"
        >
          <FormField
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
          />

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
            <p className="mt-2 font-medium text-.3md text-end">
              {t('form.label.forgetPass')}
            </p>
          </div>
        </form>
      </UIForm>
    </div>
  );
};

export { Form };
