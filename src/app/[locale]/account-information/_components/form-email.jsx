'use client';

import { Button, Form as UIForm, FormField, Input } from '@/components';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema } from '../_schemas';
import { useRouter } from 'next/navigation';

const FormEmail = () => {
  const t = useTranslations('accountInformation');
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = () => {
    router.push('/account-information/email/otp');
  };

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
                value={field.value}
                label={t('newEmail')}
                disabled={false}
                placeholder={t('newEmail')}
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

export { FormEmail };
