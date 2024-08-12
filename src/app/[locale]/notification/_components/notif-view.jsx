import React from 'react';
import { Header } from '@/components';
import { ChevronRight } from 'lucide-react';
import { formatDateTime } from '@/utils';
import NOTIFICATIONS from '@/dummy-notification.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const NotifView = () => {
  const t = useTranslations('notification');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header hasBack title={t('title')} />
      <div className="max-h-[calc(100dvh-100px)]  grow overflow-y-auto pl-17.5 pt-2">
        <ul className="list-none">
          {NOTIFICATIONS.map((item) => (
            <li key={item.id}>
              <Link
                href={`/notification/${item.id}`}
                className="relative flex w-full cursor-pointer flex-row items-center justify-between border-b border-b-gray-400 py-4"
              >
                <div className="flex flex-col pl-2 text-1422 font-normal text-gray">
                  <p className="font-bold">{t(item.type)}</p>
                  <p className="text-gray-200">{formatDateTime(item.date)}</p>
                </div>
                <div className="pr-4">
                  <ChevronRight size={24} className="text-gray" />
                </div>
                {item.isUnread && (
                  <div className="absolute -left-1.5 size-10 rounded-full bg-red-light" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { NotifView };
