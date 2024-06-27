import { getTranslations } from 'next-intl/server';
import { Heading } from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ButtonCamera } from './_components/button-camera';
import { QrScan } from './_components/qr-scan';
import SendButton from './_components/SendButton';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Scan = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'scan' });

  return (
    <div className="h-dvh relative">
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-evenly gap-52 items-center mt-10 z-20 h-dvh">
        <Heading className="font-medium text-lg text-center text-white">
          {t('receiptScan')}
        </Heading>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-xs flex items-center justify-center gap-2">
            <Input type="text" placeholder={t('enterTransactionNumber')} />
            {/* <Button>{t('send')}</Button> */}
            <SendButton />
          </div>
          <Heading className="font-medium text-2md text-center text-white w-full max-w-56.5 mt-4">
            {t('qrAlert')}
          </Heading>
          <div className="fixed bottom-10 w-full md:max-w-md flex justify-center">
            <ButtonCamera />
          </div>
        </div>
      </div>
      <QrScan />
    </div>
  );
};

export default Scan;
