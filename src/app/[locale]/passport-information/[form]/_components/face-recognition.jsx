/* eslint-disable react/button-has-type */
import { Heading } from '@/components';
import Image from 'next/image';
import React from 'react';
import ButtonRecognition from './button-face-recog';

const FaceRecognition = ({ t, form }) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <Heading level={5} className="text-1422 font-medium ">
        {t('passportPhoto')}
      </Heading>
      <span className="flex items-center justify-center rounded-[6px] border border-gray-300 bg-white py-5">
        <Image
          src="/images/passport.png"
          width={289}
          height={186}
          alt="passport"
        />
      </span>
      <div className="flex items-center justify-center">
        {form === 'form-completed' ? (
          <button className="flex w-full items-center justify-center rounded-[7px] border-[1.5px] bg-green py-2">
            <span className="flex items-center gap-5 text-[16px] font-bold text-white">
              <Image
                src="/icons/scan-face-white.svg"
                width={32}
                height={32}
                alt="passport"
              />
              {t('faceAuthenticationCompleted')}
            </span>
          </button>
        ) : (
          <ButtonRecognition t={t} />
        )}
      </div>
      <div className="mb-5 flex justify-center text-center">
        <p className="w-[315px] text-1527">
          {t('afterRegisteringYourPassport')}
        </p>
      </div>
    </div>
  );
};

export { FaceRecognition };
