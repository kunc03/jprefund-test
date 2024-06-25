import Modal from '@/components/Modal';
import Image from 'next/image';
import React from 'react';

const AdvancePreparation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-black/40">
      <div className="relative bg-white flex flex-col items-center justify-center py-5 px-3 text-center rounded-[12px] gap-4">
        <button className="absolute top-3 right-3">
          <Image
            src="/icons/close.svg"
            width={16}
            height={16}
            alt="close icon"
            className="hover:rotate-90 duration-300"
          />
        </button>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-xl text-center font-bold text-[#DD5C45] w-60">
            Necessary advance preparations
          </h1>
          <p className="text-base px-1 w-[340px]">
            Once you complete the following{' '}
            <span className="text-[#dd5c45]">two steps</span>, your tax refund
            application will begin automatically.
          </p>
          <p className="p-[9px_10px_9px_10px] text-start text-[#29AD19] border-[1px] border-[#29AD19] text-[12px] relative">
            Please note that even after you have completed the preparations, an{' '}
            <Image
              src="/icons/igreen.png"
              alt="i"
              className="inline-block w-[14px] h-[14px] relative top-[-1px] mr-1"
              width={14}
              height={14}
            />
            alert will be displayed on the home screen until the system is
            updated. The review process takes about 24 hours on average.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              src="/icons/passport1.svg"
              width={115}
              height={55}
              alt="passport regist icon"
            />

            <button
              // variants={slide}
              // animate="enter"
              // exit="exit"
              // initial="initial"
              // onClick={handleReset}
              className="border-[2px] border-[#DD5C45] p-2 text-[#DD5C45] w-[285px] h-[42px] rounded-full text-[15px] font-semibold"
            >
              Go to Passport Registration
            </button>

            <p className="text-[13px] flex flex-col gap-1">
              Please take a photo of your passport and register it. All
              information will be filled in automatically.
              <span className="text-[11px] px-10">
                If the automatically entered information is incorrect, please
                correct it manually.
              </span>
            </p>
            <p className="text-[13px] flex flex-col gap-1 px-3">
              Once your passport registration is complete, the face recognition
              button will appear under your passport photo. Take a photo of your
              face and register it.
            </p>

            <Image
              src="/icons/refundRegist.svg"
              width={71}
              height={53}
              alt="refund regist icon"
            />

            <button
              // variants={slide}
              // animate="enter"
              // exit="exit"
              // initial="initial"
              // onClick={handleReset}
              className="border-[2px] border-[#DD5C45] p-2 text-[#DD5C45] w-[285px] h-[42px] rounded-full text-[15px] font-semibold"
            >
              Register for refund method
            </button>

            <p className="text-[13px]">
              Please register at least one method for receiving your refund:
              credit card, bank account, or cashless service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancePreparation;
