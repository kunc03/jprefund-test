const locales = ['jp', 'en'];
const defaultLocale = locales[0];
const localeDetection = false;

const appConfig = {
  i18n: {
    locales,
    defaultLocale,
    localeDetection,
    localePrefix: 'as-needed',
  },
};

export default appConfig;
