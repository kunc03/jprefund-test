'use client';

import { useTranslations } from 'next-intl';
import InputForm from '../../passport-information/[form]/_components/input-form';
import { Heading, Input } from '@/components';
import { SelectOptions } from '../../passport-information/_components';
import { Form } from './form';
import { cn } from '@/utils';
import { useState } from 'react';

const FormContactDetails = ({
  defaultValue,
  setEmail,
  setPhone,
  setAddress,
  setBuilding,
  setCity,
  setState,
  setPostCode,
  setCountry,
  setIsForm,
}) => {
  const t = useTranslations('contactDetails');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, emailAddress: e.target.value }));
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, phoneNumber: e.target.value }));
  };

  const handleBuilding = (e) => {
    setBuilding(e.target.value);
    setIsForm((prevForm) => ({
      ...prevForm,
      buildingNameRoomNumber: e.target.value,
    }));
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, addressStreet: e.target.value }));
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, cityCountry: e.target.value }));
  };

  const handleState = (e) => {
    setState(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, state: e.target.value }));
  };

  const handlePostCode = (e) => {
    setPostCode(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, postCode: e.target.value }));
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, country: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Email address */}
      <InputForm
        t={t}
        label="emailAddress"
        placeholder={t('emailAddress')}
        defaultValue={defaultValue.email}
        onChange={handleEmail}
        type="email"
      />

      {/* Telephone number */}
      <Heading level={5} className="text-1422 font-medium">
        {t('telephoneNumber')}
      </Heading>
      {/* Perlu perbaikan */}
      <div className="rounded-[6px] bg-transparent h-[50px] flex p-[0.1px] relative">
        <SelectOptions
          values={['JP (+81)', 'ID (+62)']}
          className="w-[7rem] !bg-transparent left-1 top-1 h-[2.6rem] rounded-[6px] absolute"
        />
        <Input
          placeholder={'000-0000-0000'}
          onChange={handlePhone}
          type="number"
          className={cn(
            'h-[50px] text-gray border-gray-300 border !rounded-[6px] pl-[8rem] focus:!border-red hover:!border-red',
          )}
        />
      </div>
      {/* */}

      {/* Building name and room number */}
      <InputForm
        t={t}
        label={'buildingNameRoomNumber'}
        placeholder={t('buildingNameRoomNumber')}
        onChange={handleBuilding}
        type="text"
      />

      {/* Address and street */}
      <InputForm
        t={t}
        label="addressAndStreet"
        placeholder={t('addressAndStreet')}
        type="text"
        onChange={handleAddress}
      />

      {/* City or country */}
      <InputForm
        t={t}
        label="cityOrCountry"
        placeholder={t('cityOrCountry')}
        type="text"
        onChange={handleCity}
      />

      {/* State */}
      <InputForm
        t={t}
        label="state"
        placeholder={t('state')}
        type="text"
        onChange={handleState}
      />

      {/* Post code */}
      <InputForm
        t={t}
        label="postCode"
        placeholder={t('postCode')}
        type="number"
        onChange={handlePostCode}
      />

      {/* Country */}
      <InputForm
        t={t}
        label="country"
        placeholder={t('country')}
        type="text"
        onChange={handleCountry}
      />
    </div>
  );
};

export { FormContactDetails };
