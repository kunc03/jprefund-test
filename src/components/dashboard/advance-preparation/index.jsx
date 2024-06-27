import Image from 'next/image';
import React from 'react';

const AdvancePreparation = () => {
  const [passportRegis, setPassportRegis] = React.useState(false);
  const [refundRegist, setRefundRegist] = React.useState(false);

  const handlePassportRegis = () => {
    setPassportRegis(!passportRegis);
  };

  const handleRefundRegis = () => {
    setRefundRegist(!refundRegist);
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center py-5 px-3 text-center rounded-[12px] gap-4">
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
              onClick={handlePassportRegis}
              className={`${passportRegis ? 'bg-[#dd5c45] text-white text-[13px] w-[300px]' : 'text-[15px] w-[285px]'} flex items-center justify-center gap-3 border-[2px] border-[#DD5C45] p-2 text-[#DD5C45] h-[42px] rounded-full  font-semibold`}
            >
              {passportRegis && (
                <Image
                  src="/icons/checked.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
              )}
              {passportRegis
                ? 'Passport registration complete'
                : 'Go to Passport Registration'}
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
              onClick={handleRefundRegis}
              className={`${refundRegist ? 'bg-[#dd5c45] text-white text-[13px] w-[300px]' : 'text-[15px] w-[285px]'} flex items-center justify-center gap-3 border-[2px] border-[#DD5C45] p-2 text-[#DD5C45] h-[42px] rounded-full  font-semibold`}
            >
              {refundRegist && (
                <Image
                  src="/icons/checked.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
              )}
              {refundRegist
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
    </>
  );
};

export default AdvancePreparation;
