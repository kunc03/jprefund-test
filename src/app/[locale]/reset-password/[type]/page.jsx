import { getTranslations } from 'next-intl/server';
import { ContentResetPassword } from '../_components';

export const generateMetadata = async ({ params }) => {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'resetPassword' });

  return { title: t('metaTitle'), description: t('metaDescription') };
};

const ResetPasswordPage = async () => {
  return <ContentResetPassword />;
};

export default ResetPasswordPage;
