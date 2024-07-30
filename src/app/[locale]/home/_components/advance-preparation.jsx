'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/components';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils';

const AdvancePreparation = () => {
  const t = useTranslations('home');
  const router = useRouter();
  const [passportRegis, setPassportRegis] = useState(false);
  const [refundRegis, setRefundRegis] = useState(false);

  const handlePassportRegistration = () => {
    if (!passportRegis) {
      router.push('/passport-information');
      return;
    }

    setPassportRegis((old) => !old);
  };
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div
          className="flex h-9 w-full cursor-pointer items-center justify-center gap-3 bg-gray-110 text-white small:gap-2"
          aria-hidden="true"
          role="button"
          tabIndex="0"
          key="preparationHasNotBeenCompleted"
        >
          <Image alt="info" height={20} src="/images/info.svg" width={20} />
          <span
            className={cn(
              'text-1414 font-medium small:text-1022 medium:text-1315 flex items-center',
            )}
          >
            {t('preparationHasNotBeenCompleted')}
          </span>
          <ChevronRight />
        </div>
      </DialogTrigger>
      <DialogContent className="w-11/12 overflow-y-auto sm:h-max sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            <p
              className="w-187 text-center !text-2021 font-bold text-red"
              key="necessaryAdvancePreparations"
            >
              {t('necessaryAdvancePreparations')}
            </p>
          </DialogTitle>
        </DialogHeader>
        <div
          className="flex flex-col items-center justify-center gap-22"
          key="content"
        >
          <p className="text-center text-1522 font-medium" key="twoSteps">
            {t.rich('information', {
              redText: (
                <span className="text-red" key="spanTwoSteps">
                  {t('twoSteps')}
                </span>
              ),
            })}
          </p>

          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              alt="refund regist icon"
              height={54}
              src="/icons/passport-regis-advance.svg"
              width={116}
            />

            <Button
              variant={passportRegis ? 'default' : 'outline'}
              onClick={handlePassportRegistration}
              className={cn(
                'w-full gap-2 hover:bg-transparent hover:text-red',
                passportRegis &&
                  '!flex items-center hover:bg-red hover:text-white',
              )}
            >
              {passportRegis && (
                <Image
                  alt="check"
                  height={26}
                  src="/icons/checked.svg"
                  width={26}
                />
              )}
              <p className={cn('text-1315')}>
                {passportRegis
                  ? t('passportRegistrationCompleted')
                  : t('goToPassportRegistration')}
              </p>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              alt="refund regist icon"
              height={53}
              src="/icons/refundRegist.svg"
              width={71}
            />

            <Button
              variant={refundRegis ? 'default' : 'outline'}
              onClick={() => setRefundRegis((old) => !old)}
              className={cn(
                'gap-2 hover:bg-transparent hover:text-red',
                refundRegis &&
                  '!flex items-center border hover:bg-red hover:text-white',
              )}
            >
              {refundRegis && (
                <Image
                  alt="check"
                  height={26}
                  src="/icons/checked.svg"
                  width={26}
                />
              )}
              <p className={cn('text-1315')}>
                {refundRegis ? t('goToRefundComplete') : t('goToRefund')}
              </p>
            </Button>
          </div>

          <p
            className="relative mt-3 border border-green px-10 py-10.5  text-start !text-1217 font-semibold text-green"
            key="declaimer"
          >
            {t.rich('declaimer', {
              image: (
                <Image
                  alt="i"
                  className="relative -top-px mr-1 inline-block size-[14px]"
                  height={14}
                  src="/icons/igreen.png"
                  width={14}
                  key="image"
                />
              ),
            })}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { AdvancePreparation };
