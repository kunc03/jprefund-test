'use client';

import { Button, Form as UIForm, FormField, Input } from '@/components';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { passwordSchema } from '../_schemas';
import { useRouter } from 'next/navigation';

const FormPassword = () => {
  const t = useTranslations('accountInformation');
  const router = useRouter();

  // Function to check current password
  const checkCurrentPassword = (password) => {
    return password === '12341234';
  };

  const schema = passwordSchema(checkCurrentPassword);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      newPassword: '',
      confPassword: '',
    },
  });

  const { errors } = form.formState;

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
          name="password"
          render={({ field }) => {
            return (
              <Input
                hasForm
                type="password"
                value={field.value}
                label={t('currentPassword')}
                disabled={false}
                placeholder={t('placeholder.currentPassword')}
                errors={errors.password}
                className="!h-50 bg-gray-80 !px-14 !py-18"
                {...field}
              />
            );
          }}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => {
            return (
              <Input
                hasForm
                type="password"
                value={field.value}
                label={t('newPassword')}
                disabled={false}
                errors={errors.newPassword}
                placeholder={t('placeholder.newPassword')}
                className="!h-50 bg-gray-80 !px-14 !py-18"
                {...field}
              />
            );
          }}
        />

        <FormField
          control={form.control}
          name="confPassword"
          render={({ field }) => {
            return (
              <Input
                hasForm
                type="password"
                value={field.value}
                label={t('passwordConfirmation')}
                disabled={false}
                errors={errors.confPassword}
                placeholder={t('placeholder.passwordConfirmation')}
                className="!h-50 bg-gray-80 !px-14 !py-18"
                {...field}
              />
            );
          }}
        />

        <Button className="!w-fit px-11.5 py-14.5" type="submit">
          {t('sendVerificationCode')}
        </Button>
      </form>
    </UIForm>
  );
};

export { FormPassword };
