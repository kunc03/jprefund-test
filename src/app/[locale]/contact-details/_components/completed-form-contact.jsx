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
  Heading,
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

const CompletedFormContactDetails = ({
  form,
  children,
  onSubmit,
  defaultValues,
}) => {
  const t = useTranslations('contactDetails');
  const formRef = useRef();
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();
  const { errors } = form.formState;

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
      type: 'text',
    },
    {
      label: t('country'),
      name: 'country',
      type: 'text',
    },
  ];

  const handleOnlyNumeric = (event, maxLength) => {
    const nonNumericKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];
    const isDigit = /[0-9]/.test(event.key);

    if (!isDigit && !nonNumericKeys.includes(event.key)) {
      event.preventDefault();
      return;
    }

    const currentLength = event.target.value.replace(/[^0-9]/g, '').length;

    if (isDigit && currentLength >= maxLength) {
      event.preventDefault();
    }
  };

  const handlePhoneNumberInput = (event) => {
    const input = event.target.value.replace(/[^\d]/g, '');

    let formattedInput = '';

    if (input.length > 3 && input.length <= 7) {
      formattedInput = `${input.slice(0, 3)} - ${input.slice(3, 7)}`;
    } else if (input.length > 7) {
      formattedInput = `${input.slice(0, 3)} - ${input.slice(3, 7)} - ${input.slice(7, 12)}`;
    } else {
      formattedInput = input;
    }

    if (event.target.value !== formattedInput) {
      // eslint-disable-next-line no-param-reassign
      event.target.value = formattedInput;
    }
  };

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
                  type="text"
                  className="!text-1422"
                  pre={
                    <PhoneNumberOption
                      selectedPhoneArea={selectedPhoneArea}
                      setSelectedPhoneArea={setSelectedPhoneArea}
                    />
                  }
                  onInput={handlePhoneNumberInput}
                  onKeyDown={(event) => {
                    handleOnlyNumeric(event, 11);
                  }}
                  {...field}
                />
              );
            }}
          />

          {errors.emailAddress && (
            <span className="mt-5 text-1422 font-medium text-red-light">
              {t('either')}
            </span>
          )}

          <hr className={cn('bg-gray-400 w-full mt-7 mb-17')} />

          <div className={cn('flex flex-col gap-22 w-full')}>
            {contactForms.map((contactForm) => (
              <div className="flex flex-col gap-4" key={contactForm.name}>
                <Heading level={5} className="text-1422 font-medium">
                  {contactForm.label}
                </Heading>

                <p className="h-50 p-2 text-1616">
                  {defaultValues[contactForm.name]}
                </p>
              </div>
            ))}
          </div>

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

export { CompletedFormContactDetails };
