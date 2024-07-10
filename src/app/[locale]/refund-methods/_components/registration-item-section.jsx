'use client';

import { RegistrationItem } from './registration-item';
import { useRegistrationOptions } from '../_hooks/use-registration-options';

const RegistrationSection = ({ data }) => {
  const { data: registrationOptions } = useRegistrationOptions(data);

  return registrationOptions.map((item) => (
    <RegistrationItem item={item} key={item.id} />
  ));
};

export { RegistrationSection };
