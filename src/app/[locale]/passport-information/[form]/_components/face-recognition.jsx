import { Button, Heading } from '@/components';
import Image from 'next/image';
import React from 'react';
import ButtonRecognition from './button-face-recog';

const FaceRecognition = ({ t, form }) => {
  console.log(form);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Heading level={5} className="text-1422 font-medium ">
        {t('passportPhoto')}
      </Heading>
      <span className="flex items-center justify-center border-gray-300 border py-5 rounded-[6px] bg-white">
        <Image
          src={'/images/passport.png'}
          width={289}
          height={186}
          alt="passport"
        />
      </span>
      <div className="flex justify-center items-center">
        {form === 'form-completed' ? (
          <button className="flex items-center justify-center border-[1.5px] rounded-[7px] py-2 bg-green w-full">
            <span className="text-white flex gap-5 text-[16px] font-bold items-center">
              <Image
                src={'/icons/scan-face-white.svg'}
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
    </div>
  );
};

export { FaceRecognition };
