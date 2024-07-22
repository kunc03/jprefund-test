'use client';

import { useTranslations } from 'next-intl';
import {
  Form as UIForm,
  FormField,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components';
import { cn } from '@/utils';
import { useRef, useState } from 'react';

const PhoneNumberOption = ({ selectedPhoneArea, setSelectedPhoneArea }) => (
  <Select
    onValueChange={(value) => {
      setSelectedPhoneArea(value);
    }}
  >
    <SelectTrigger
      className="h-full w-100 !p-9.5 font-bold focus:!outline-none focus:!ring-transparent"
      value={selectedPhoneArea}
    >
      <SelectValue placeholder="JP (+81)" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="+81">JP (+81)</SelectItem>
      <SelectItem value="+62">ID (+62)</SelectItem>
    </SelectContent>
  </Select>
);

const FormContactDetails = ({ form, children, onSubmit }) => {
  const t = useTranslations('contactDetails');
  const formRef = useRef();
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();

  const contactForms = [
    {
      label: t('buildingNameRoomNumber'),
      name: 'buildingNameRoomNumber',
      type: 'text',
    },
    {
      label: t('addressAndStreet'),
      name: 'addressStreet',
      type: 'text',
    },
    {
      label: t('cityOrCountry'),
      name: 'cityCountry',
      type: 'text',
    },
    {
      label: t('state'),
      name: 'state',
      type: 'text',
    },
    {
      label: t('postCode'),
      name: 'postCode',
      type: 'number',
    },
    {
      label: t('country'),
      name: 'country',
      type: 'text',
    },
  ];

  return (
    <div>
      <UIForm {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn('flex flex-col gap-4 justify-center items-center')}
        >
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <Input
                  hasForm
                  label={t('emailAddress')}
                  placeholder={t('emailAddress')}
                  disabled={false}
                  type="email"
                  className="!text-1422"
                  {...field}
                />
              );
            }}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => {
              return (
                <Input
                  hasForm
                  label={t('telephoneNumber')}
                  placeholder={t('telephoneNumber')}
                  disabled={false}
                  type="number"
                  className="!text-1422"
                  pre={
                    <PhoneNumberOption
                      selectedPhoneArea={selectedPhoneArea}
                      setSelectedPhoneArea={setSelectedPhoneArea}
                    />
                  }
                  {...field}
                />
              );
            }}
          />

          {contactForms.map((contactForm) => (
            <FormField
              key={contactForm.name}
              control={form.control}
              name={contactForm.name}
              render={({ field }) => {
                return (
                  <Input
                    hasForm
                    label={contactForm.label}
                    placeholder={contactForm.label}
                    disabled={false}
                    type={contactForm.type}
                    className="!text-1422"
                    {...field}
                  />
                );
              }}
            />
          ))}

          <div
            className={cn(
              'w-full flex flex-col gap-28 justify-center items-center',
            )}
          >
            {children}
          </div>
        </form>
      </UIForm>
    </div>
  );
};

export { FormContactDetails };
