/* eslint-disable import/named */
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import appConfig from './app.config';

const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: appConfig.i18n.locales,
  localePrefix: appConfig.i18n.localePrefix,
});

const navigationHooks = { usePathname, useRouter };

export default navigationHooks;
