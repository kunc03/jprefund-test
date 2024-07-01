import createMiddleware from 'next-intl/middleware';

import appConfig from '@/app.config';

export default createMiddleware(appConfig.i18n);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
