/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { SelectOptions } from '../../passport-information/_components';
import { cn } from '@/utils';
import { FormContactDetails } from '../_components/form-contact-details';
import { ButtonCertificate, SuccessDialog } from '../_components';

const ContactDetails = () => {
  const t = useTranslations('contactDetails');

  const defaultValue = {
    email: 'andreas.andi@talenavi.com',
    phone: '',
    building: '',
    address: '',
    city: '',
    isState: '',
    isPostCode: '',
    isCountry: '',
  };

  const [email, setEmail] = useState(defaultValue.email);
  const [phone, setPhone] = useState(defaultValue.phone);
  const [building, setBuilding] = useState(defaultValue.building);
  const [address, setAddress] = useState(defaultValue.address);
  const [city, setCity] = useState(defaultValue.city);
  const [isState, setIsState] = useState(defaultValue.isState);
  const [isPostCode, setIsPostCode] = useState(defaultValue.isPostCode);
  const [isCountry, setIsCountry] = useState(defaultValue.isCountry);

  const [isSuccess, setIsSuccess] = useState(false);

  const [isForm, setIsForm] = useState({
    emailAddress: email,
    phoneNumber: phone,
    buildingNameRoomNumber: building,
    addressStreet: address,
    cityCountry: city,
    state: isState,
    postCode: isPostCode,
    country: isCountry,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const isChanged =
      email !== defaultValue.email ||
      phone !== defaultValue.phone ||
      building !== defaultValue.building ||
      address !== defaultValue.address ||
      city !== defaultValue.city ||
      isState !== defaultValue.isState ||
      isPostCode !== defaultValue.isPostCode ||
      isCountry !== defaultValue.isCountry;

    setIsButtonDisabled(!isChanged);
  }, [email, phone, building, address, city, isState, isPostCode, isCountry]);

  useEffect(() => {
    setIsSuccess(false);
  });

  const handleClickSave = () => {
    setIsSuccess(true);
    setIsButtonDisabled(true);
  };

  return (
    <>
      <div
        className={cn(
          'flex grow flex-col items-center justify-center gap-22 w-full p-28',
        )}
      >
        <FormContactDetails
          isForm={isForm}
          setEmail={setEmail}
          setPhone={setPhone}
          setBuilding={setBuilding}
          setAddress={setAddress}
          setCity={setCity}
          setState={setIsState}
          setPostCode={setIsPostCode}
          setCountry={setIsCountry}
          setIsForm={setIsForm}
        />
      </div>

      <div className="flex w-full grow flex-col gap-22 p-28 text-1422">
        <h1 className="text-start font-medium">{t('proofOfResidence')}</h1>
        <p className="text-left">{t('uploadDocumentInstruction')}</p>
      </div>

      <div
        className={cn(
          'flex grow flex-col items-center justify-center gap-22 w-full p-28',
        )}
      >
        <SelectOptions values={['Document type']} className=" !rounded-[6px]" />

        <ButtonCertificate className="my-[1rem] w-auto" />

        <Button
          onClick={handleClickSave}
          className={cn(
            'w-[173px] my-[1rem]',
            isButtonDisabled && '!bg-gray-300',
          )}
          disabled={isButtonDisabled}
        >
          {t('save')}
        </Button>
      </div>

      <SuccessDialog isOpen={isSuccess} />
    </>
  );
};

export { ContactDetails };
