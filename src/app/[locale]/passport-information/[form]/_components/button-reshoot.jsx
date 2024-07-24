import { Button } from '@/components';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const ButtonReshoot = ({ path }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  return (
    <div className="flex flex-col items-end">
      <Button
        onClick={() => router.push(path)}
        className="bg-transparent text-red hover:bg-transparent"
      >
        {t('reshoot')}
      </Button>
    </div>
  );
};

export { ButtonReshoot };
