'use client';

import { Heading } from '@/components';
import { InputForm } from './input-form';
import { cn } from '@/utils';
import { InputDate, SelectOptions } from '../../_components';

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
    <div className={cn('flex flex-col gap-3 w-full text-1718')}>
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

      <div className="flex flex-col gap-1">
        <Heading level={5} className="text-1422 font-medium">
          {t('birthday')}
        </Heading>

        <InputDate
          selectedDate={formId.dateOfBirth}
          label={t('birthday')}
          defaultValue={defaultValue.dateOfBirth}
          onHandleSelected={handleSelectedDateOfBirth}
          filter={formId}
        />
      </div>

      <InputForm
        t={t}
        label="passportNumber"
        placeholder={t('passportNumber')}
        defaultValue={defaultValue.passportNumber}
        onChange={handlePassportNumber}
        type="number"
      />

      <div className="flex flex-col gap-1">
        <Heading level={5} className="text-1422 font-medium">
          {t('dateOfExpiry')}
        </Heading>

        <InputDate
          selectedDate={formId.dateOfExpiry}
          label={t('dateOfExpiry')}
          onHandleSelected={handleSelectedDateOfExpiry}
          filter={formId}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Heading level={5} className="text-1422 font-medium">
          {t('passportIssuingCountry')}
        </Heading>
        <SelectOptions
          values={['USA', 'IDN', 'JP']}
          handleChange={handlePassportIssuing}
          defaultValue={defaultValue.passportIssuingCountry}
          t={t}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Heading level={5} className="text-1422 font-medium">
          {t('countryOfIssueCode')}
        </Heading>
        <SelectOptions
          values={['USA', 'IDN', 'JP']}
          handleChange={handleCountryIssue}
          defaultValue={defaultValue.countryOfIssueCode}
          t={t}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Heading level={5} className="text-1422 font-medium">
          {t('gender')}
        </Heading>
        <SelectOptions
          values={['Male', 'Female']}
          handleChange={handleGender}
          defaultValue={defaultValue.gender}
          t={t}
        />
      </div>
    </div>
  );
};

export { PassportForm };
