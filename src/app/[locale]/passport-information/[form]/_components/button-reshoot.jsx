import { Button } from '@/components';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const ButtonReshoot = ({ path }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  return (
    <div className="flex flex-col items-end">
      <Button
        onClick={() => router.push(`${path}?retake=true`)}
        className={cn('bg-transparent text-red hover:bg-transparent p-0')}
      >
        {t('reshoot')}
      </Button>
    </div>
  );
};

export { ButtonReshoot };
