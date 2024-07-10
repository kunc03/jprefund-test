'use client';

import { Button, Form as UIForm, FormField, Input } from '@/components';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { phoneSchema } from '../_schemas';

const FormPassword = () => {
  const t = useTranslations('accountInformation');

  const form = useForm({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: '',
    },
  });

  const handleSubmit = () => {};

  return (
    <UIForm {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col items-center gap-22"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <Input
                hasForm
                type="number"
                value={field.value}
                label={t('newPhone')}
                disabled={false}
                placeholder="000-0000-0000"
                className="!h-50 bg-gray-80 !px-14 !py-18"
                {...field}
              />
            );
          }}
        />

        <Button
          className="!w-fit px-11.5 py-14.5"
          type="submit"
          onClick={handleSubmit}
        >
          {t('sendVerificationCode')}
        </Button>
      </form>
    </UIForm>
  );
};

export { FormPassword };
