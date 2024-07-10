/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import ButtonCertificate from '../_components/button-certificate';
import { SelectOptions } from '../../passport-information/_components';
import { cn } from '@/utils';
import { FormContactDetails } from '../_components/form-contact-details';

const ContactDetails = () => {
  const t = useTranslations('contactDetails');
  const router = useRouter();

  const defaultValue = {
    email: 'andreas.andi@talenavi.com',
    phone: '1234567890',
  };

  const [email, setEmail] = useState(defaultValue.email);
  const [phone, setPhone] = useState('');
  const [building, setBuilding] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('');

  const [isForm, setIsForm] = useState({
    emailAddress: email,
    phoneNumber: null,
    buildingNameRoomNumber: null,
    addressStreet: null,
    cityCountry: null,
    state: null,
    postCode: null,
    country: null,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    isForm;
    setIsButtonDisabled(false);
  }, []);

  useEffect(() => {
    const isChanged =
      email !== defaultValue.email ||
      phone !== '' ||
      building !== '' ||
      address !== '' ||
      city !== '' ||
      state !== '' ||
      postCode !== '' ||
      country !== '';

    setIsButtonDisabled(!isChanged);
  }, [
    email,
    phone,
    building,
    address,
    city,
    state,
    postCode,
    country,
    defaultValue,
  ]);

  return (
    <>
      <div className="flex w-full grow flex-col items-center justify-center gap-22 p-28">
        <FormContactDetails
          defaultValue={defaultValue}
          setEmail={setEmail}
          setPhone={setPhone}
          setBuilding={setBuilding}
          setAddress={setAddress}
          setCity={setCity}
          setState={setState}
          setPostCode={setPostCode}
          setCountry={setCountry}
          setIsForm={setIsForm}
        />
      </div>

      <div className="flex w-full grow flex-col gap-22 p-28 text-1422">
        <h1 className="text-start font-medium">{t('proofOfResidence')}</h1>
        <p className="text-left">{t('uploadDocumentInstruction')}</p>
      </div>

      <div className="flex w-full grow flex-col items-center justify-center gap-22 p-28">
        <SelectOptions values={['Document type']} className=" !rounded-[6px]" />

        <ButtonCertificate className="my-[1rem]" />

        <Button
          onClick={() => router.push('/home')}
          className={cn(
            'w-[173px] my-[1rem]',
            isButtonDisabled && '!bg-gray-300',
          )}
          disabled={isButtonDisabled}
        >
          {t('save')}
        </Button>
      </div>
    </>
  );
};

export { ContactDetails };
