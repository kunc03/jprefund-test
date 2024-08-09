'use client';

/* eslint-disable react/button-has-type */

import { Heading } from '@/components';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/utils';
import { ButtonRecognition } from './button-face-recog';
import { ButtonReshoot } from './button-reshoot';

const FaceRecognition = ({ t, form }) => {
  const passportPhoto = [
    {
      path: 'form',
      imagePassport: '/images/passport.png',
      imageFace: '/images/no-face.svg',
      ButtonRecognition: true,
      urlPassport: true,
      urlFace: false,
    },
    {
      path: 'not-complete',
      imagePassport: '/images/passport.png',
      imageFace: '/images/face.svg',
      urlPassport: true,
      urlFace: true,
    },
    {
      path: 'pending',
      imagePassport: '/images/passport.png',
      imageFace: '/images/face.svg',
      urlPassport: false,
      urlFace: false,
    },
    {
      path: 'problem',
      imagePassport: '/images/passport.png',
      imageFace: '/images/face.svg',
      urlPassport: true,
      urlFace: true,
    },
    {
      path: 'complete',
      imagePassport: '/images/passport-complete.svg',
      imageFace: '/images/face-complete.svg',
      urlPassport: false,
      urlFace: false,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-3">
      {passportPhoto.map((item) => (
        <div
          key={item.path}
          className={cn(
            'flex flex-col',
            item.path === 'complete' && 'gap-22',
            item.path === 'pending' && 'gap-22',
          )}
        >
          {form === item.path && (
            <>
              <div>
                <Heading level={5} className="pb-2 text-1422 font-medium ">
                  {t('passportPhoto')}
                </Heading>
                <span
                  className={cn(
                    'flex items-center justify-center rounded-6 border border-gray-300 bg-white p-2',
                  )}
                >
                  {item.path === 'complete' ? (
                    <Image
                      src={item.imagePassport}
                      width={323}
                      height={127}
                      alt={item.path}
                    />
                  ) : (
                    <Image
                      src={item.imagePassport}
                      width={289}
                      height={186}
                      alt={item.path}
                    />
                  )}
                </span>
                {item.urlPassport && (
                  <ButtonReshoot path="/passport-information/photograph-passport" />
                )}
              </div>

              <div className="mt-3">
                <Heading level={5} className="py-2 text-1422 font-medium ">
                  {t('faceRecognitionPhoto')}
                </Heading>

                <div
                  className={cn(
                    'flex flex-col items-center justify-center rounded-6 border border-gray-300 bg-white p-2 gap-10 text-1518',
                  )}
                >
                  {item.path === 'complete' ? (
                    <Image
                      src={item.imageFace}
                      width={323}
                      height={184}
                      alt={item.path}
                    />
                  ) : (
                    <Image
                      src={item.imageFace}
                      width={103}
                      height={137}
                      alt={item.path}
                    />
                  )}
                  {item.ButtonRecognition && <ButtonRecognition t={t} />}
                </div>

                {item.urlFace && (
                  <ButtonReshoot path="/passport-information/take-portrait" />
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export { FaceRecognition };
