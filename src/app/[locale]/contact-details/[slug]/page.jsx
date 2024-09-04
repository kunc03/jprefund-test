import { Header } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ContactDetails } from '../form/contact-details';
import { cn } from '@/utils';
import { FormLabel } from '../form/_components/contact-form-label';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const Page = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactDetails' });

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Header hasBack title={t('title')} />
        <FormLabel />
      </div>

      {/* Scrollable Content */}
      <div
        className={cn('flex-grow overflow-y-auto')}
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <ContactDetails />
      </div>
    </div>
  );
};

export default Page;
