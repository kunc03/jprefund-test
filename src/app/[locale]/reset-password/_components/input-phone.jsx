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
import { ChevronDown } from 'lucide-react';

const PhoneNumberOption = ({ selectedPhoneArea, setSelectedPhoneArea }) => (
  <Select
    onValueChange={(value) => {
      setSelectedPhoneArea(value);
    }}
  >
    <SelectTrigger
      className={cn(
        'w-100 font-bold focus:!outline-none focus:!ring-transparent h-38 absolute bottom-2 left-2',
      )}
      value={selectedPhoneArea}
    >
      <SelectValue placeholder="JP (+81)" />
      <ChevronDown
        size={20}
        className={cn('absolute right-1 top-2.5 text-gray')}
      />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem value="+81">JP (+81)</SelectItem>
      <SelectItem value="+62">ID (+62)</SelectItem>
    </SelectContent>
  </Select>
);

const InputPhone = ({ setSelectedPhoneArea, selectedPhoneArea, onChange }) => {
  const t = useTranslations('resetPassword');

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
          '!h-56 !rounded-6 !border border-gray-300 focus:border-red hover:border-red',
          '!pl-32',
        )}
      />
    </form>
  );
};

export default InputPhone;
