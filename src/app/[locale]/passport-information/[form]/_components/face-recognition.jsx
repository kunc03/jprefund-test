'use client';

/* eslint-disable react/button-has-type */

import { Heading } from '@/components';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/utils';
import { ButtonRecognition } from './button-face-recog';
import { ButtonReshoot } from './button-reshoot';

const FaceRecognition = ({ t, form }) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div>
        <Heading level={5} className="pb-2 text-1422 font-medium ">
          {t('passportPhoto')}
        </Heading>
        <span className="flex items-center justify-center rounded-6 border border-gray-300 bg-white py-5">
          <Image
            src="/images/passport.png"
            width={289}
            height={186}
            alt="passport"
          />
        </span>
        {form !== 'pending' && form !== 'complete' && (
          <ButtonReshoot path="/passport-information/photograph-passport" />
        )}
      </div>

      <div className="mt-3">
        <Heading level={5} className="py-2 text-1422 font-medium ">
          {t('faceRecognitionPhoto')}
        </Heading>
        {form !== 'form' ? (
          <>
            <span
              className={cn(
                'flex flex-col items-center justify-center rounded-6 border border-gray-300 bg-white py-10 gap-10',
              )}
            >
              <Image
                src="/images/face.svg"
                width={103}
                height={137}
                alt="passport"
              />
            </span>
            {form !== 'pending' && form !== 'complete' && (
              <ButtonReshoot path="/passport-information/take-portrait" />
            )}
          </>
        ) : (
          <span
            className={cn(
              'flex flex-col items-center justify-center rounded-6 border border-gray-300 bg-white py-10 gap-10',
            )}
          >
            <Image
              src="/images/no-face.svg"
              width={103}
              height={137}
              alt="passport"
            />
            <ButtonRecognition t={t} />
          </span>
        )}
      </div>
    </div>
  );
};

export { FaceRecognition };
