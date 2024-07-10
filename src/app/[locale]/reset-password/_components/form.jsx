'use client';

import {
  Heading,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormRef } from '@/hooks';
import { Form as UIForm, FormField } from '@/components/ui/form';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { emailSchema, phoneSchema } from '../_schemas';

const PhoneNumberOption = ({ selectedPhoneArea, setSelectedPhoneArea }) => (
  <Select
    onValueChange={(value) => {
      setSelectedPhoneArea(value);
    }}
  >
    <SelectTrigger
      className={cn(
        'w-100 font-bold focus:!outline-none focus:!ring-transparent h-38 relative',
      )}
      value={selectedPhoneArea}
    >
      <SelectValue placeholder="JP (+81)" />
      <ChevronDown
        size={20}
        className={cn('absolute right-1 top-2.5 text-gray')}
      />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="+81">JP (+81)</SelectItem>
      <SelectItem value="+62">ID (+62)</SelectItem>
    </SelectContent>
  </Select>
);

const Form = () => {
  const pathname = usePathname();
  const router = useRouter();
  const formRef = useRef();
  const { setFormRef } = useFormRef();
  const [resetType, setResetType] = useState(null);
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();
  const t = useTranslations('resetPassword');

  // Mendapatkan tipe dari pathname
  useEffect(() => {
    if (pathname === '/reset-password/phone') {
      setResetType('phone');
    } else if (pathname === '/reset-password/email') {
      setResetType('email');
    }
  }, [pathname]);

  const registerSchema = resetType === 'email' ? emailSchema : phoneSchema;

  const defaultValues = useMemo(() => {
    if (resetType === 'phone') {
      return { phone: '' };
    }
    return { email: '' };
  }, [resetType]);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  useEffect(() => {
    setFormRef(formRef.current);
  }, [setFormRef]);

  const handleSubmit = (data) => {
    if (resetType === 'email' && data.email) {
      router.push('/reset-password/email/verification');
    } else if (resetType === 'phone' && data.phone && data.length >= 10) {
      router.push('/reset-password/phone/verification');
    }
  };

  return (
    <>
      <Heading
        className="my-28.5 text-center text-2122 font-medium"
        key="createAccount"
      >
        {t('title')}
      </Heading>

      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-8 flex w-full flex-col gap-6"
        >
          {resetType === 'email' && (
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
          )}
          {resetType === 'phone' && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <Input
                  hasForm
                  type="number"
                  label={t('form.label.phone')}
                  placeholder="000-0000-0000"
                  disabled={false}
                  showSpinner={false}
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
    </>
  );
};

export { Form };
