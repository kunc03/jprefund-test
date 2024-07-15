/* eslint-disable react/no-array-index-key */
import { getTranslations } from 'next-intl/server';
import { Header, Heading } from '@/components';
import { Accordion } from './_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Faq = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('title')} />
      <div className="flex grow flex-col ">
        <div className="flex flex-1 flex-col ">
          <Heading className="flex h-58 items-end  border-b border-b-gray-500 bg-white pb-12 pl-16 text-1616 font-semibold text-black">
            {t('aboutTheService')}
          </Heading>
          {[...Array(10)].map((_, index) => {
            return (
              <Accordion
                key={index}
                label="Is there an expiration date for tax exemption?"
                content="In Japan, tax exemption for foreign tourists usually has a specific expiration date tied to the period of stay in Japan. The key points regarding the expiration of tax exemption for foreign tourists are: Eligibility Period: The tax exemption applies only to goods purchased during the stay of the foreign tourist in Japan. The goods must be taken out of Japan before the departure."
              />
            ); // contoh data dinamis
          })}
        </div>
        <div className="flex flex-1 flex-col ">
          <Heading className="flex h-58 items-end  border-b border-b-gray-500 bg-white pb-12 pl-16 text-1616 font-semibold text-black">
            {t('howToUse')}
          </Heading>
          {[...Array(10)].map((_, index) => {
            return (
              <Accordion
                key={index}
                label="Is there an expiration date for tax exemption?"
                content="In Japan, tax exemption for foreign tourists usually has a specific expiration date tied to the period of stay in Japan. The key points regarding the expiration of tax exemption for foreign tourists are: Eligibility Period: The tax exemption applies only to goods purchased during the stay of the foreign tourist in Japan. The goods must be taken out of Japan before the departure."
              />
            ); // contoh data dinamis
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
