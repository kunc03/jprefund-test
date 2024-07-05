import InputForm from './input-form';
import { useTranslations } from 'next-intl';

const ContactInform = () => {
  const t = useTranslations('passportInformation');
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Email address */}
      <InputForm
        t={t}
        label="emailAddress"
        placeholder={t('emailAddress')}
        type="email"
      />

      {/* Telephone number */}
      <InputForm
        t={t}
        label="telephoneNumber"
        placeholder={t('telephoneNumber')}
        type="number"
      />

      {/* Building name and room number */}
      <InputForm
        t={t}
        label={'buildingNameRoomNumber'}
        placeholder={t('buildingNameRoomNumber')}
        type="text"
      />

      {/* Address and street */}
      <InputForm
        t={t}
        label="addressAndStreet"
        placeholder={t('addressAndStreet')}
        type="text"
      />

      {/* City or country */}
      <InputForm
        t={t}
        label="cityOrCountry"
        placeholder={t('cityOrCountry')}
        type="text"
      />

      {/* State */}
      <InputForm t={t} label="state" placeholder={t('state')} type="text" />

      {/* Post code */}
      <InputForm
        t={t}
        label="postCode"
        placeholder={t('postCode')}
        type="number"
      />

      {/* Country */}
      <InputForm t={t} label="country" placeholder={t('country')} type="text" />
    </div>
  );
};

export { ContactInform };
