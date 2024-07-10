'use client';

import { useTranslations } from 'next-intl';
import { emailSchema, phoneSchema } from '../../_schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormRef } from '@/hooks';
import { useEffect, useRef, useMemo, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils';

const PhoneNumberOption = ({ selectedPhoneArea, setSelectedPhoneArea, t }) => (
  <Select
    onValueChange={(value) => {
      setSelectedPhoneArea(value);
    }}
  >
    <SelectTrigger
      className="w-100 font-bold focus:!outline-none focus:!ring-transparent h-38"
      value={selectedPhoneArea}
    >
      <SelectValue placeholder={t('form.placeholder.phoneArea')} />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="+81">JP (+81)</SelectItem>
      <SelectItem value="+62">ID (+62)</SelectItem>
    </SelectContent>
  </Select>
);

const Form = ({ type }) => {
  const t = useTranslations('register');
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const router = useRouter();
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();

  const registerSchema = type === 'email' ? emailSchema : phoneSchema;

  const defaultValues = useMemo(() => {
    if (type === 'phone') {
      return { phone: '' };
    }
    return { email: '' };
  }, [type]);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = (data) => {
    if (type === 'email' && data.email === 'unregister@mail.com') {
      router.push('/register/email/otp');
    } else if (selectedPhoneArea && data) {
      router.push('/register/phone/otp');
    }
  };

  return (
    <UIForm {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-8 flex w-full flex-col gap-6"
      >
        {type === 'email' && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                hasForm
                className={cn('!border !border-gray-300 !rounded-6')}
                label={t('form.label.email')}
                placeholder={t('form.placeholder.email')}
                disabled={false}
                {...field}
              />
            )}
          />
        )}
        {type === 'phone' && (
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <Input
                hasForm
                label={t('form.label.phone')}
                placeholder={t('form.placeholder.phone')}
                disabled={false}
                pre={
                  <PhoneNumberOption
                    t={t}
                    selectedPhoneArea={selectedPhoneArea}
                    setSelectedPhoneArea={setSelectedPhoneArea}
                  />
                }
                {...field}
              />
            )}
          />
        )}
      </form>
    </UIForm>
  );
};

export { Form };
