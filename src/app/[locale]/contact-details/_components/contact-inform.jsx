import { useTranslations } from 'next-intl';
import InputForm from '../../passport-information/[form]/_components/input-form';
import { Heading, Input } from '@/components';
import { SelectOptions } from '../../passport-information/_components';
import { Form } from './form';
import { cn } from '@/utils';

const ContactInform = ({ defaultValue }) => {
  const t = useTranslations('contactDetails');

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Email address */}
      <InputForm
        t={t}
        label="emailAddress"
        placeholder={t('emailAddress')}
        defaultValue={defaultValue.email}
        type="email"
      />

      {/* Telephone number */}
      <Heading level={5} className="text-1422 font-medium">
        {t('telephoneNumber')}
      </Heading>
      {/* Perlu perbaikan */}
      <div className="border rounded-[6px] h-[50px] flex ">
        <SelectOptions
          values={['JP (+81)', 'ID (+62)']}
          className="w-[10rem] !border-none !rounded-rb-none"
        />
        <Input
          placeholder={t('telephoneNumber')}
          defaultValue={defaultValue.phone}
          type="number"
          className={cn(
            'h-[50px] text-gray border-gray-300 !border-none !rounded-r-[6px] ',
          )}
        />
      </div>
      {/* */}

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
