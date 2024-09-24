'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';

const ButtonCamera = ({ cam }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push('/scan');
      }}
      size="floating"
      variant="floating"
      className="fixed inset-x-1/2 bottom-0 z-50 mb-3 -translate-x-1/2 -translate-y-1/4 bg-red"
    >
      {cam === 'empty' ? (
        <Image alt="logo" height={32} src="/icons/plus-white.svg" width={32} />
      ) : (
        <Image alt="logo" height={32} src="/images/qr.svg" width={32} />
      )}
    </Button>
  );
};

export { ButtonCamera };
