import { Heading } from '@/components';
import Image from 'next/image';
import { cn } from '@/utils';
import { ButtonAddRegistration } from './button-add-registration';
import { RegistrationInformation } from './registration-item-information';
import { useTranslations } from 'next-intl';
import { ButtonDeleteRegistration } from './button-delete-registration';
import { ButtonChangeRegistration } from './button-change-registration';

const paymentImages = {
  creditCard: '/icons/credit-card.svg',
  bankTransfer: '/icons/bank-account.svg',
  cashLess: '/icons/cashless.svg',
};

const RegistrationItem = ({ item }) => {
  const t = useTranslations('refundMethod');

  return (
    <div
      className="relative mx-28 flex flex-row flex-wrap items-center justify-between rounded-md border border-gray-500 bg-white px-13 py-33.5"
      key={item.id}
    >
      <div
        className={cn(
          'flex flex-row items-center gap-10',
          !item.isRegister && 'opacity-55',
        )}
      >
        <Image
          alt={item.type}
          height={50}
          src={paymentImages[item.type]}
          width={50}
        />
        <div className="flex flex-col gap-7 text-gray">
          <Heading level={2} className="text-1518 font-bold">
            {t(item.type)}
          </Heading>
          {!item.isRegister && (
            <p className="max-w-131 text-1218 font-normal text-gray ">
              {t('noRegistration')}
            </p>
          )}
          {item.isRegister && <RegistrationInformation item={item} t={t} />}
        </div>
      </div>
      {item.isChoose && (
        <div className="absolute right-0 top-3  rounded-l-4 bg-red px-21 py-4 text-center">
          <p className="text-1212 text-white"> {t('choosing')}</p>
        </div>
      )}
      {!item.isChoose && item.isRegister && (
        <ButtonChangeRegistration item={item} />
      )}
      {item.isRegister && <ButtonDeleteRegistration item={item} />}
      {!item.isRegister && (
        <div className="flex grow flex-row flex-wrap items-center justify-between gap-11 ">
          <p className=" grow text-end text-1112 font-bold text-gray">
            {t('registration')}
          </p>
          <ButtonAddRegistration slug={item.slug} />
        </div>
      )}
    </div>
  );
};

export { RegistrationItem };
