'use client';

import {
  FormField,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils';

const PhoneNumberOption = ({ selectedPhoneArea, setSelectedPhoneArea }) => (
  <Select
    onValueChange={(value) => {
      setSelectedPhoneArea(value);
    }}
  >
    <SelectTrigger
      className={cn(
        'h-full w-100 !p-9.5 font-bold focus:!outline-none focus:!ring-transparent',
      )}
      value={selectedPhoneArea}
    >
      <SelectValue placeholder="JP (+81)" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="+81">JP (+81)</SelectItem>
      <SelectItem value="+62">ID (+62)</SelectItem>
    </SelectContent>
  </Select>
);

const InputPhone = ({ setSelectedPhoneArea, selectedPhoneArea, form }) => {
  const t = useTranslations('resetPassword');

  return (
    <>
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <Input
            hasForm
            placeholder={t('form.placeholder.phone')}
            disabled={false}
            type="number"
            pre={
              <PhoneNumberOption
                t={t}
                selectedPhoneArea={selectedPhoneArea}
                setSelectedPhoneArea={setSelectedPhoneArea}
              />
            }
            {...field}
          />
        )}
      />

      {/* <Input
        type="number"
        placeholder="000-0000-0000"
        disabled={false}
        className={cn(
          '!h-56 !rounded-6 !border border-gray-300 focus:border-red hover:border-red',
          '!pl-32',
        )}
      /> */}
    </>
  );
};

export default InputPhone;
