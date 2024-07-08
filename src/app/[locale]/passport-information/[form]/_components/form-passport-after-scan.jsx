'use client';

import { Heading, Input } from '@/components';
import { cn } from '@/utils';
import { InputDate, SelectOptions } from '../../_components';
import InputForm from './input-form';
import { useState } from 'react';

const PassportForm = ({
  t,
  formId,
  setIsForm,
  handleSelectedDateOfBirth,
  handleSelectedDateOfExpiry,
  defaultValue,
  setFirstName,
  setLastName,
  setPassportNumber,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, firstName: e.target.value }));
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, lastName: e.target.value }));
  };

  const handlePassportNumber = (e) => {
    setPassportNumber(e.target.value);
    setIsForm((prevForm) => ({ ...prevForm, passportNumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Firstname */}

      <InputForm
        t={t}
        label="firstName"
        placeholder={t('firstName')}
        defaultValue={defaultValue.firstName}
        onChange={handleFirstName}
        type="text"
      />

      {/* Lastname */}
      <InputForm
        t={t}
        label="lastName"
        placeholder={t('lastName')}
        defaultValue={defaultValue.lastName}
        onChange={handleLastName}
        type="text"
      />

      {/* Date of birth */}
      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfBirth')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfBirth}
        label={t('dateOfBirth')}
        defaultValue={defaultValue.dateOfBirth}
        onHandleSelected={handleSelectedDateOfBirth}
        filter={formId}
      />

      {/* Passport number */}
      <InputForm
        t={t}
        label="passportNumber"
        placeholder={t('passportNumber')}
        defaultValue={defaultValue.passportNumber}
        onChange={handlePassportNumber}
        type="number"
      />

      {/* Date of expiry */}
      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfExpiry')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfExpiry}
        label={t('dateOfExpiry')}
        onHandleSelected={handleSelectedDateOfExpiry}
        filter={formId}
      />

      {/* Passport issuing country */}
      <Heading level={5} className="text-1422 font-medium">
        {t('passportIssuingCountry')}
      </Heading>
      <SelectOptions
        // onHandleSelected={handleSelectedPassportIssuing}
        values={['USA', 'IDN', 'JP']}
        t={t}
      />

      {/* Country of issue code */}
      <Heading level={5} className="text-1422 font-medium">
        {t('countryOfIssueCode')}
      </Heading>
      <SelectOptions
        // onHandleSelected={handleSelectedCountryIssue}
        values={['USA', 'IDN', 'JP']}
        t={t}
      />

      {/* Gender */}
      <Heading level={5} className="text-1422 font-medium">
        {t('gender')}
      </Heading>
      <SelectOptions
        // onHandleSelected={handleSelectedGender}
        values={['Male', 'Female']}
        t={t}
      />
    </div>
  );
};

export { PassportForm };
