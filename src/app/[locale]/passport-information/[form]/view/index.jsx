/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { NotComplete } from './not-complete';
import { Pending } from './pending';
import { Problem } from './problem';
import { Complete } from './complete';
import { useState } from 'react';

const Form = ({ form }) => {
  const defaultValue = {
    firstName: 'Joni',
    lastName: 'Mitchell',
    birthday: '1997.9.25',
    passportNumber: '00000000',
    dateOfExpiry: '1997.9.25',
    passportIssuingCountry: 'USA',
    countryOfIssueCode: 'USA',
    gender: 'Female',
  };

  const [isFirstName, setIsFirstName] = useState(defaultValue.firstName);
  const [isLastName, setIsLastName] = useState(defaultValue.lastName);
  const [isPassportNumber, setIsPassportNumber] = useState(
    defaultValue.passportNumber,
  );

  const [isForm, setIsForm] = useState({
    firstName: isFirstName,
    lastName: isLastName,
    passportNumber: isPassportNumber,
    birthday: defaultValue.birthday,
    dateOfExpiry: defaultValue.dateOfExpiry,
    passportIssuingCountry: defaultValue.passportIssuingCountry,
    countryOfIssueCode: defaultValue.countryOfIssueCode,
    gender: defaultValue.gender,
  });

  return (
    <>
      {form === 'form' && (
        <NotComplete
          form={form}
          defaultValue={defaultValue}
          isForm={isForm}
          setIsForm={setIsForm}
          setIsFirstName={setIsFirstName}
          setIsLastName={setIsLastName}
          setIsPassportNumber={setIsPassportNumber}
        />
      )}
      {form === 'not-complete' && (
        <NotComplete
          form={form}
          defaultValue={defaultValue}
          isForm={isForm}
          setIsForm={setIsForm}
          setIsFirstName={setIsFirstName}
          setIsLastName={setIsLastName}
          setIsPassportNumber={setIsPassportNumber}
        />
      )}
      {form === 'pending' && <Pending form={form} isForm={isForm} />}
      {form === 'problem' && <Problem form={form} isForm={isForm} />}
      {form === 'complete' && <Complete form={form} isForm={isForm} />}
    </>
  );
};

export { Form };
