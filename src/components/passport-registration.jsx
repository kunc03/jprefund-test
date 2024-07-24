import React from 'react';
import Image from 'next/image';

const PassportRegistrationIcon = ({ height = 55, width = 115 }) => {
  return (
    <Image
      alt="passport regist icon"
      height={height}
      src="/images/identity.svg"
      width={width}
    />
  );
};

export { PassportRegistrationIcon };
