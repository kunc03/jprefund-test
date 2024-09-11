'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useFormRef } from '@/hooks';
import { usePathname } from 'next/navigation';

const ButtonNext = () => {
  const t = useTranslations('register');
  const pathname = usePathname();
  const submitForm = useFormRef((state) => state.submitForm);

  const otp = pathname.includes('otp');

  const handleClick = () => {
    submitForm();
  };

  return (
    <Button
      className="mb-9 w-249 items-center justify-center"
      onClick={handleClick}
    >
      {t(!otp ? 'next' : 'verify')}
    </Button>
  );
};

export { ButtonNext };
