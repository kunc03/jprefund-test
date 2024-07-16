'use client';

import {
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
        'w-111 font-bold focus:!outline-none focus:!ring-transparent h-38 absolute bottom-1.5 left-2',
      )}
      value={selectedPhoneArea}
    >
      <SelectValue placeholder="JP (+81)" />
    </SelectTrigger>
    <SelectContent className="!w-111 bg-white">
      <SelectItem value="+81" className="w-100">
        JP (+81)
      </SelectItem>
      <SelectItem value="+62" className="w-100">
        ID (+62)
      </SelectItem>
    </SelectContent>
  </Select>
);

const InputPhone = ({ setSelectedPhoneArea, selectedPhoneArea, onChange }) => {
  const t = useTranslations('contactDetails');

  return (
    <form className="relative">
      <PhoneNumberOption
        t={t}
        selectedPhoneArea={selectedPhoneArea}
        setSelectedPhoneArea={setSelectedPhoneArea}
      />
      <Input
        type="number"
        placeholder="000-0000-0000"
        disabled={false}
        onChange={onChange}
        className={cn(
          '!h-50 !rounded-6 !border border-gray-300 focus:border-red hover:border-red',
          '!pl-32',
        )}
      />
    </form>
  );
};

export { InputPhone };
