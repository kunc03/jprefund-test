'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as UIForm } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components';
import { phoneSchema } from '../../register/_schemas';
import { cn } from '@/utils';

const PhoneNumberOption = ({ selectedPhoneArea, setSelectedPhoneArea, t }) => (
  <Select
    onValueChange={(value) => {
      setSelectedPhoneArea(value);
    }}
  >
    <SelectTrigger
      className={cn(
        'w-100 font-bold focus:!outline-none focus:!ring-transparent h-full',
      )}
      value={selectedPhoneArea}
    >
      <SelectValue
        placeholder={t('form.placeholder.phoneArea')}
        className="bg-gray-300"
      />
    </SelectTrigger>
    <SelectContent className="bg-white rounded-[6px]">
      <SelectItem value="+81">JP (+81)</SelectItem>
      <SelectItem value="+62">ID (+62)</SelectItem>
    </SelectContent>
  </Select>
);

const Form = () => {
  const t = useTranslations('register');
  const formRef = useRef();
  const router = useRouter();
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();

  const form = useForm({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: '' },
  });

  useEffect(() => {
    formRef.current = form;
  }, [form]);

  const handleSubmit = (data) => {
    if (selectedPhoneArea && data) {
      router.push('/contact-details');
    }
  };

  return (
    <UIForm {...form}>
      <Input
        hasForm
        //   label={t('form.label.phone')}
        placeholder={t('form.placeholder.phone')}
        disabled={false}
        className=" rounded-[6px]"
        pre={
          <PhoneNumberOption
            selectedPhoneArea={selectedPhoneArea}
            setSelectedPhoneArea={setSelectedPhoneArea}
            t={t}
          />
        }
      />
    </UIForm>
  );
};

export { Form };
