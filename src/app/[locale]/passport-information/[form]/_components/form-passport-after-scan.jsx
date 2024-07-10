'use client';

import { Heading } from '@/components';
import { InputDate, SelectOptions } from '../../_components';
import InputForm from './input-form';

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

  const handlePassportIssuing = (value) => {
    setIsForm((prevState) => ({
      ...prevState,
      passportIssuingCountry: value,
    }));
  };

  const handleGender = (value) => {
    setIsForm((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const handleCountryIssue = (value) => {
    setIsForm((prevState) => ({
      ...prevState,
      countryOfIssueCode: value,
    }));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <InputForm
        t={t}
        label="firstName"
        placeholder={t('firstName')}
        defaultValue={defaultValue.firstName}
        onChange={handleFirstName}
        type="text"
      />

      <InputForm
        t={t}
        label="lastName"
        placeholder={t('lastName')}
        defaultValue={defaultValue.lastName}
        onChange={handleLastName}
        type="text"
      />

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

      <InputForm
        t={t}
        label="passportNumber"
        placeholder={t('passportNumber')}
        defaultValue={defaultValue.passportNumber}
        onChange={handlePassportNumber}
        type="number"
      />

      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfExpiry')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfExpiry}
        label={t('dateOfExpiry')}
        onHandleSelected={handleSelectedDateOfExpiry}
        filter={formId}
      />

      <Heading level={5} className="text-1422 font-medium">
        {t('passportIssuingCountry')}
      </Heading>
      <SelectOptions
        values={['USA', 'IDN', 'JP']}
        // setSelected={setPassportIssuingCountry}
        handleChange={handlePassportIssuing}
        t={t}
      />

      <Heading level={5} className="text-1422 font-medium">
        {t('countryOfIssueCode')}
      </Heading>
      <SelectOptions
        values={['USA', 'IDN', 'JP']}
        // setSelected={setCountryOfIssueCode}
        handleChange={handleCountryIssue}
        t={t}
      />

      <Heading level={5} className="text-1422 font-medium">
        {t('gender')}
      </Heading>
      <SelectOptions
        values={['Male', 'Female']}
        // setSelected={setGender}
        handleChange={handleGender}
        t={t}
      />
    </div>
  );
};

export { PassportForm };
