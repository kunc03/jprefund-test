const locales = ['jp', 'en'];
const defaultLocale = locales[1];
const localeDetection = false;

const appConfig = {
  i18n: {
    locales,
    defaultLocale,
    localeDetection,
    localePrefix: 'as-needed',
  },
};

module.exports = { appConfig };
