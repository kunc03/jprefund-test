'use client';

import { Button, Form as UIForm, FormField, Input } from '@/components';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/utils';
import { passwordSchema } from '../_schemas/password-schema';

const FormPassword = ({ setIsConfirm }) => {
  const t = useTranslations('accountInformation');

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
    },
  });

  const { errors } = form.formState;

  const handleSubmit = (data) => {
    if (data.password >= 8) {
      setIsConfirm(true);
    }
  };

  return (
    <UIForm {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn('w-full flex flex-col items-center gap-28')}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <Input
                hasForm
                type="password"
                value={field.value}
                label={t('password')}
                errors={errors.password}
                disabled={false}
                placeholder={t('placeholder.enterYourPassword')}
                className="!h-50 bg-gray-80 !px-14 !py-18"
                {...field}
              />
            );
          }}
        />

        <Button
          className={cn('!w-249 px-11.5 py-14.5 mt-9')}
          type="submit"
          onClick={handleSubmit}
        >
          {t('deleteAccount')}
        </Button>
      </form>
    </UIForm>
  );
};

export { FormPassword };
