import { getTranslations } from 'next-intl/server';
import { Header } from '@/components';
import { ChevronRight } from 'lucide-react';
import { formatDateTime } from '@/utils';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'notification' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const NOTIFICATIONS = [
  {
    id: 1,
    date: '2024-05-17T08:55:00',
    isUnread: true,
    type: 'selfieRejected',
  },
  {
    id: 2,
    date: '2024-05-17T08:55:00',
    isUnread: true,
    type: 'qrScanSuccessful',
  },
  {
    id: 3,
    date: '2024-05-17T08:55:00',
    isUnread: true,
    type: 'statusChangedToCompleted',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
  {
    id: 4,
    date: '2024-05-17T08:55:00',
    isUnread: false,
    type: 'selfieRejected',
  },
];

const NotificationPage = async (params) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'notification' });
  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('title')} />
      <div className="max-h-[calc(100dvh-100px)]  grow overflow-y-auto pl-4 pt-2">
        <ul className="list-none">
          {NOTIFICATIONS.map((item) => (
            <li
              className="relative flex w-full cursor-pointer flex-row items-center justify-between border-b border-b-gray-400 py-4"
              key={item.id}
            >
              <div className="flex flex-col pl-2 text-1422 font-normal">
                <p className="font-bold">{t(item.type)}</p>
                <p>{formatDateTime(item.date)}</p>
              </div>
              <div className="pr-4">
                <ChevronRight size={24} className="text-gray" />
              </div>
              {item.isUnread && (
                <div className="absolute -left-2 top-8 size-10 rounded-full bg-red-light" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationPage;
