'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { formatSecondToTime } from '@/utils';

const OtpExpireTime = () => {
  const t = useTranslations('register');
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-1 flex-col justify-between">
      <p className="mt-4 w-full text-center text-1722 font-medium text-gray">
        {t('dateOfExpiry')}: {formatSecondToTime(timeLeft)}
      </p>

      {timeLeft === 0 && (
        <p className="mb-36 w-full text-center text-2022 font-medium text-red">
          {t('reissueAuthCode')}
        </p>
      )}
    </div>
  );
};

export { OtpExpireTime };
