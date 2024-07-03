import { getTranslations } from 'next-intl/server';
import { Header, Heading } from '@/components';
import NOTIFICATIONS from '@/dummy-notification.json';
import { formatDateTime } from '@/utils';
import { redirect } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'notification' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const NotificationDetailPage = async ({ params }) => {
  const { locale, id } = params;

  const item = NOTIFICATIONS.filter((row) => row.id === id)?.[0] ?? null;
  const t = await getTranslations({ locale, namespace: 'notification' });

  if (!item) redirect('/notification');
  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('announcementDetails')} />
      <div className="max-h-[calc(100dvh-100px)] grow overflow-y-auto px-29">
        <div className="mt-23">
          <Heading className="text-1622 font-medium text-gray">
            {t(item.type)}
          </Heading>
          <p className="text-1222 font-normal text-gray-200">
            {formatDateTime(item.date)}
          </p>
        </div>
        <div className="mt-23 text-justify text-1322 font-normal">
          {item.body}
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailPage;
