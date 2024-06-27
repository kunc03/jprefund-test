import Image from 'next/image';
import React from 'react';
import { cn } from '@/utils';

const AdvancePreparation = () => {
  const [passportRegis, setPassportRegis] = React.useState(false);
  const [refundRegis, setRefundRegis] = React.useState(false);

  const handlePassportRegis = () => {
    setPassportRegis(!passportRegis);
  };

  const handleRefundRegis = () => {
    setRefundRegis(!refundRegis);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-12 bg-white px-3 py-5 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="w-60 text-center text-xl font-bold text-red">
          Necessary advance preparations
        </h1>
        <p className="w-340 px-1 text-base">
          Once you complete the following{' '}
          <span className="text-red">two steps</span>, your tax refund
          application will begin automatically.
        </p>
        <p className="relative border border-green p-[9px_10px_9px_10px] text-start text-1222 text-green">
          Please note that even after you have completed the preparations, an{' '}
          <Image
            alt="i"
            className="relative -top-px mr-1 inline-block size-[14px]"
            height={14}
            src="/icons/igreen.png"
            width={14}
          />
          alert will be displayed on the home screen until the system is
          updated. The review process takes about 24 hours on average.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            alt="passport regist icon"
            height={55}
            src="/icons/passport1.svg"
            width={115}
          />

          <button
            type="button"
            className={cn(
              passportRegis
                ? 'w-300 bg-red text-1322 text-white'
                : 'w-285 text-1515',
              'flex h-42 items-center justify-center gap-3 rounded-full border-2 border-red p-2 font-semibold  text-red',
            )}
            onClick={handlePassportRegis}
          >
            {passportRegis && (
              <Image
                alt="check"
                height={20}
                src="/icons/checked.svg"
                width={20}
              />
            )}
            {passportRegis
              ? 'Passport registration complete'
              : 'Go to Passport Registration'}
          </button>

          <p className="flex flex-col gap-1 text-[13px]">
            Please take a photo of your passport and register it. All
            information will be filled in automatically.
            <span className="px-10 text-[11px]">
              If the automatically entered information is incorrect, please
              correct it manually.
            </span>
          </p>
          <p className="flex flex-col gap-1 px-3 text-[13px]">
            Once your passport registration is complete, the face recognition
            button will appear under your passport photo. Take a photo of your
            face and register it.
          </p>

          <Image
            alt="refund regist icon"
            height={53}
            src="/icons/refundRegist.svg"
            width={71}
          />

          <button
            type="button"
            className={cn(
              refundRegis
                ? 'w-300 bg-red text-[13px] text-white'
                : 'w-285 text-1515',
              'flex h-42 items-center justify-center gap-3 rounded-full border-2 border-red p-2 font-semibold  text-red',
            )}
            onClick={handleRefundRegis}
          >
            {refundRegis && (
              <Image
                alt="check"
                height={20}
                src="/icons/checked.svg"
                width={20}
              />
            )}
            {refundRegis
              ? 'Refund method registration completed'
              : 'Register for refund method'}
          </button>

          <p className="text-[13px]">
            Please register at least one method for receiving your refund:
            credit card, bank account, or cashless service.
          </p>
        </div>
      </div>
    </div>
  );
};

export { AdvancePreparation };
