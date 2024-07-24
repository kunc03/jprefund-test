import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const ButtonReshoot = ({ path }) => {
  const t = useTranslations('passportInformation');
  const router = useRouter();

  return (
    <div className="flex flex-col items-end">
      <div
        role="button"
        aria-hidden
        onClick={() => router.push(path)}
        className="bg-transparent text-red hover:bg-transparent text-1422 font-medium"
      >
        {t('reshoot')}
      </div>
    </div>
  );
};

export { ButtonReshoot };
