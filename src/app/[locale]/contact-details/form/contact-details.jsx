/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { usePathname } from 'next/navigation';
import { NotCompleteForm } from './_components/not-completed';
import { CompletedForm } from './_components/completed';

const ContactDetails = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === '/contact-details/not-complete' && <NotCompleteForm />}
      {pathname === '/contact-details/completed' && <CompletedForm />}
    </div>
  );
};

export { ContactDetails };
