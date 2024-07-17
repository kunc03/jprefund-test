'use client';

import { useTranslations } from 'next-intl';
import { Heading } from '@/components';
import { cn } from '@/utils';
import { useState } from 'react';
import { InputForm } from './input-form';
import { InputPhone } from './input-phone';

const FormContactDetails = ({
  isForm,
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
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();

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
    <div className={cn('flex flex-col gap-3 w-full')}>
      <InputForm
        t={t}
        label="emailAddress"
        placeholder={t('emailAddress')}
        defaultValue={isForm.emailAddress}
        onChange={handleEmail}
        type="email"
      />

      <Heading level={5} className="text-1422 font-medium">
        {t('telephoneNumber')}
      </Heading>
      <InputPhone
        selectedPhoneArea={selectedPhoneArea}
        setSelectedPhoneArea={setSelectedPhoneArea}
        onChange={handlePhone}
      />

      <InputForm
        t={t}
        label="buildingNameRoomNumber"
        placeholder={t('buildingNameRoomNumber')}
        onChange={handleBuilding}
        type="text"
      />

      <InputForm
        t={t}
        label="addressAndStreet"
        placeholder={t('addressAndStreet')}
        type="text"
        onChange={handleAddress}
      />

      <InputForm
        t={t}
        label="cityOrCountry"
        placeholder={t('cityOrCountry')}
        type="text"
        onChange={handleCity}
      />

      <InputForm
        t={t}
        label="state"
        placeholder={t('state')}
        type="text"
        onChange={handleState}
      />

      <InputForm
        t={t}
        label="postCode"
        placeholder={t('postCode')}
        type="number"
        onChange={handlePostCode}
      />

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
