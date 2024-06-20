import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/heading';
import { getTranslations } from 'next-intl/server';
import { SummaryCard } from './_components/summary-card';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

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
      <div className="mt-3 h-9 bg-gray-110 text-white flex justify-center items-center gap-3">
        <Image src="/images/info.svg" alt="logo" width={20} height={20} />
        <span className="font-medium text-2sm">
          {t('preparationHasNotBeenCompleted')}
        </span>
        <ChevronRight />
      </div>

      <div className=" w-full md:max-w-xs mx-auto min-h-[calc(100dvh-256px)] flex justify-center items-center gap-2 flex-col ">
        <Heading className="font-bold text-lg">
          {t('noTaxExemptionRecordsSaved')}
        </Heading>
        <Heading
          level="3"
          className="font-medium text-lg text-center w-52.5 max-w-52.5"
        >
          {t('voucherQrCodePleaseScan')}
        </Heading>
        <Image
          src="/images/arrow-down.svg"
          alt="logo"
          width={19}
          height={218}
        />
      </div>

      <div className="fixed bottom-10  w-full md:max-w-md flex justify-center">
        <Button variant="floating" size="floating">
          <Image src="/images/qr.svg" alt="logo" width={32} height={32} />
        </Button>
      </div>
    </>
  );
};

export default Home;
