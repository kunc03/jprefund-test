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
        'flex flex-row justify-between py-14 items-center gap-11',
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
      <div className="relative flex flex-row items-center justify-start gap-12">
        {subMenu.icon}
        {subMenu.isRequired && (
          <div className="absolute left-0 top-0 size-10 rounded-full bg-red-light small:top-5" />
        )}
        <p className="text-1416 font-medium text-gray small:text-1010  ">
          {subMenu.label}
        </p>
      </div>
      <div className="inline-flex flex-row items-center justify-end gap-2 md:shrink-0">
        <div className="inline-flex flex-row flex-wrap justify-end gap-2 small:flex-col small:gap-0.5">
          {subMenu.isRequired && (
            <div
              className={cn(
                'text-start text-1222 font-bold text-red small:text-1022',
              )}
            />
          )}
          {subMenu.isUnregister && (
            <span className="text-1222 font-normal text-gray small:text-1022">
              {t('unProvided')}
            </span>
          )}
        </div>

        <ChevronRight size={16} className="place-items-end text-gray" />
      </div>
    </div>
  );
};

const MenuItem = ({ menu, t }) => {
  return (
    <div className="w-full">
      <Heading className="pt-2 text-1718 font-bold text-gray sm:text-1416">
        {menu.label}
      </Heading>
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
            href: `/${locale}/passport-information`,
            label: t('routes.passportInformation'),
            active: pathname === `/passport-information`,
            icon: <IconImage image="passport-information.svg" />,
            isRequired: true,
            isUnregister: true,
          },
          {
            href: `/${locale}/contact-details/not-complete`,
            label: t('routes.contactDetails'),
            active: pathname === `/contact-details`,
            icon: <IconImage image="contact-detail.svg" />,
            isRequired: true,
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
            isRequired: true,
            isUnregister: true,
          },
          {
            href: `/${locale}/transaction-record`,
            label: t('routes.transactionRecord'),
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
            href: `/${locale}/account-information`,
            label: t('routes.accountInformation'),
            active: pathname === `/account-information`,
            icon: <IconImage image="account-information.svg" />,
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
        ],
      },
      {
        href: '#',
        label: t('routes.helpSupport'),
        subMenu: [
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
            href: `/${locale}/privacy-policy`,
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
    <div
      className={cn(
        'fixed left-0 top-0 flex flex-col h-full w-10/12 overflow-y-auto bg-white-dark px-15 mt-25.5 pt-24',
      )}
    >
      <div className="flex h-full flex-col gap-20">
        {ROUTES.map((item) => {
          return (
            <MenuItem menu={item} key={`${item.href}-${item.label}`} t={t} />
          );
        })}
        <div
          className={cn(
            'py-18 rounded-md duration-150 text-center text-1422 font-bold text-red cursor-pointer',
          )}
        >
          {t('logout')}
        </div>
        <div className="pb-32">&nbsp;</div>
      </div>
    </div>
  );
};

export { Sidebar };
