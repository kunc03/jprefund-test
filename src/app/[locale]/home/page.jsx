import { Header } from '@/components/header';
import { Heading } from '@/components/heading';
import { getTranslations } from 'next-intl/server';
import { SummaryCard } from './_components/summary-card';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ButtonCamera } from './_components/button-camera';
import { DetailBottomDrawer } from './_components/detail-bottom-drawer';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Home = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <>
      <Header />
      <Heading className="font-medium text-lg text-center">
        {t('recordOfTaxFreePurchases')}
      </Heading>
      <div className="px-2.5 pt-3.5 flex flex-row gap-2 justify-evenly items-center overflow-x-auto">
        <SummaryCard title={t('refundApplication')} number={46520} />
        <SummaryCard title={t('remittanceProcedureCompleted')} />
        <SummaryCard title={t('nonRefundable')} />
      </div>
      <div className="mt-3 h-9 bg-gray-110 text-white flex justify-center items-center gap-3 cursor-pointer">
        <Image src="/images/info.svg" alt="info" width={20} height={20} />
        <span className="font-medium text-2sm">
          {t('preparationHasNotBeenCompleted')}
        </span>
        <ChevronRight />
      </div>

      <div className=" w-full md:max-w-xs mx-auto h-[calc(100dvh-312px)] flex gap-2 flex-col pb-6">
        <div className="flex justify-center items-center gap-2 flex-col shrink-0 mt-14">
          <Heading className="font-bold text-lg">
            {t('noTaxExemptionRecordsSaved')}
          </Heading>
          <Heading
            level="3"
            className="font-medium text-lg text-center w-52.5 max-w-52.5"
          >
            {t('voucherQrCodePleaseScan')}
          </Heading>
        </div>
        <div className="flex flex-col items-center h-full relative ">
          <div className="w-0.5 bg-gray-400 flex-grow"></div>
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 -mt-1"></div>
        </div>
      </div>

      <div className="fixed bottom-10  w-full md:max-w-md flex justify-center">
        <ButtonCamera />
      </div>

      <DetailBottomDrawer />
    </>
  );
};

export default Home;
