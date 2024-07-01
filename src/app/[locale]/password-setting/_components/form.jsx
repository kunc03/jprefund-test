'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm, FormField, Input } from '@/components';
import { useFormRef } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import { passwordSettingSchema } from '../_schemas/password-setting-schema';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Form = () => {
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const t = useTranslations('passwordSetting');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConf, setIsShowPasswordConf] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleShowPasswordConf = () => {
    setIsShowPasswordConf((prev) => !prev);
  };

  const form = useForm({
    resolver: zodResolver(passwordSettingSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = (data) => {
    if (data) {
      router.push('/home');
    }
  };

  return (
    <UIForm {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col gap-18 px-28"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Input
              hasForm
              label={t('form.label.password')}
              placeholder={t('form.placeholder.password')}
              disabled={false}
              type={isShowPassword ? 'text' : 'password'}
              suf={
                isShowPassword ? (
                  <Image
                    src="/icons/eye-off.svg"
                    alt="logo"
                    width={29}
                    height={22}
                    className="cursor-pointer"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <Image
                    src="/icons/eye.svg"
                    alt="logo"
                    width={29}
                    height={22}
                    className="cursor-pointer"
                    onClick={handleShowPassword}
                  />
                )
              }
              {...field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <Input
              hasForm
              label={t('form.label.confirmPassword')}
              placeholder={t('form.placeholder.confirmPassword')}
              disabled={false}
              type={isShowPasswordConf ? 'text' : 'password'}
              suf={
                isShowPasswordConf ? (
                  <Image
                    src="/icons/eye-off.svg"
                    alt="logo"
                    width={29}
                    height={22}
                    className="cursor-pointer"
                    onClick={handleShowPasswordConf}
                  />
                ) : (
                  <Image
                    src="/icons/eye.svg"
                    alt="logo"
                    width={29}
                    height={22}
                    className="cursor-pointer"
                    onClick={handleShowPasswordConf}
                  />
                )
              }
              {...field}
            />
          )}
        />
      </form>
    </UIForm>
  );
};

export { Form };
