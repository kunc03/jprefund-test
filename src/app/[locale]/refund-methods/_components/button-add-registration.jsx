'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ButtonAddRegistration = ({ slug }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/refund-methods/${slug}`);
  };
  return (
    <div
      className="cursor-pointer"
      onClick={handleOnClick}
      role="button"
      tabIndex="0"
      aria-hidden="true"
    >
      <Image
        alt="info"
        height={24}
        src="/icons/btn-add.svg"
        width={24}
        className="size-24"
      />
    </div>
  );
};

export { ButtonAddRegistration };
