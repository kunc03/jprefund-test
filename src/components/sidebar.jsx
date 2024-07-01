'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useMemo } from 'react';
import { Heading } from './heading';
import { cn } from '@/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const IconImage = ({ image }) => {
  return <Image alt={image} height={28} src={`/icons/${image}`} width={28} />;
};

const SubMenuItem = ({ subMenu, index, t, total }) => {
  return (
    <div
      key={`${subMenu.href}`}
      className={cn(
        'flex flex-row justify-between py-14 items-center gap-11 relative',
        index === 0 && 'border-t border-gray-300 mt-17',
        index > 0 && index < total - 1 && 'border-t border-gray-300',
        index > 0 &&
          index < total - 1 &&
          index % 1 === 1 &&
          'border-b border-gray-300',
        index > 0 &&
          index < total - 1 &&
          index % 1 === 0 &&
          'border-t border-gray-300',
        index === total - 1 && 'border-b border-t border-gray-300',
      )}
    >
      {subMenu.isRequired && (
        <div className="absolute -left-2 top-2 size-10 rounded-full bg-red-light" />
      )}
      <div className="flex flex-row items-center justify-start gap-12">
        {subMenu.icon}
        <p className="text-1416 font-medium text-gray ">{subMenu.label}</p>
      </div>
      <div className="flex flex-1 shrink-0 flex-row items-center  justify-end gap-2">
        {subMenu.isRequired && (
          <span className="text-1222 font-bold text-red">{t('required')}</span>
        )}
        {subMenu.isUnregister && (
          <span className="text-1222 font-normal text-gray">
            {t('unregistered')}
          </span>
        )}
        <ChevronRight size={16} className="place-items-end text-gray" />
      </div>
    </div>
  );
};

const MenuItem = ({ menu, t }) => {
  return (
    <div className="w-full">
      <Heading className="text-1718 font-bold text-gray">{menu.label}</Heading>
      {menu.subMenu.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={`${item.href}-${item.label}`}
            className="cursor-pointer"
          >
            <SubMenuItem
              subMenu={item}
              index={index}
              t={t}
              total={menu.subMenu.length}
            />
          </Link>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const t = useTranslations('global');
  const locale = useLocale();
  const ROUTES = useMemo(
    () => [
      {
        href: '#',
        label: t('routes.identityAuthentication'),
        subMenu: [
          {
            href: `/${locale}/passport-informations`,
            label: t('routes.passportInformation'),
            active: pathname === `/passport-informations`,
            icon: <IconImage image="passport-information.svg" />,
            isRequired: true,
            isUnregister: true,
          },
          {
            href: `/${locale}/contact-details`,
            label: t('routes.contactDetails'),
            active: pathname === `/contact-details`,
            icon: <IconImage image="contact-detail.svg" />,
            isRequired: false,
            isUnregister: true,
          },
          {
            href: `/${locale}/residence-information`,
            label: t('routes.residenceInformation'),
            active: pathname === `/residence-information`,
            icon: <IconImage image="residence-information.svg" />,
            isRequired: false,
            isUnregister: true,
          },
        ],
      },
      {
        href: '#',
        label: t('routes.refundInformation'),
        subMenu: [
          {
            href: `/${locale}/refund-methods`,
            label: t('routes.refundMethod'),
            active: pathname === `/refund-methods`,
            icon: <IconImage image="refund-method.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/recording-of-transfers`,
            label: t('routes.recordingOfTransfer'),
            active: pathname === `/recording-of-transfers`,
            icon: <IconImage image="recording-of-transfer.svg" />,
            isRequired: false,
            isUnregister: false,
          },
        ],
      },
      {
        href: '#',
        label: t('routes.setting'),
        subMenu: [
          {
            href: `/${locale}/change-passwords`,
            label: t('routes.changePassword'),
            active: pathname === `/change-passwords`,
            icon: <IconImage image="change-password.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/language-settings`,
            label: t('routes.languageSettings'),
            active: pathname === `/language-settings`,
            icon: <IconImage image="lang-setting.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/account-deletions`,
            label: t('routes.accountDeletion'),
            active: pathname === `/account-deletions`,
            icon: <IconImage image="account-deletion.svg" />,
            isRequired: false,
            isUnregister: false,
          },
        ],
      },
      {
        href: '#',
        label: t('routes.helpSupport'),
        subMenu: [
          {
            href: `/${locale}/if-you-lose-your-receipts`,
            label: t('routes.ifYouLoseYourReceipt'),
            active: pathname === `/if-you-lose-your-receipts`,
            icon: <IconImage image="if-you-lose-your-receipt.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/faq`,
            label: t('routes.faq'),
            active: pathname === `/faq`,
            icon: <IconImage image="faq.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/refund-status`,
            label: t('routes.refundStatus'),
            active: pathname === `/refund-status`,
            icon: <IconImage image="refund-status.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/privacy-policies`,
            label: t('routes.privacyPolicy'),
            active: pathname === `/privacy-policy`,
            icon: <IconImage image="privacy-policy.svg" />,
            isRequired: false,
            isUnregister: false,
          },
          {
            href: `/${locale}/user-terms`,
            label: t('routes.userTerms'),
            active: pathname === `/user-terms`,
            icon: <IconImage image="user-term.svg" />,
            isRequired: false,
            isUnregister: false,
          },
        ],
      },
    ],
    [locale, pathname, t],
  );

  return (
    <div className="fixed left-0 top-0 flex h-full w-10/12 overflow-y-auto bg-white px-15 pt-20">
      <div className="flex grow flex-col gap-29  pb-4">
        {ROUTES.map((item) => {
          return (
            <MenuItem menu={item} key={`${item.href}-${item.menu}`} t={t} />
          );
        })}
      </div>
      <div className="fixed inset-x-0 bottom-0 w-10/12 bg-white py-15 text-center text-1422 font-bold text-red">
        {t('logout')}
      </div>
    </div>
  );
};

export { Sidebar };
