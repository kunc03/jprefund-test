'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components';
import { useQrScan } from '@/hooks';

const ButtonCamera = () => {
  const router = useRouter();
  const { value, onSelected } = useQrScan();

  return (
    <Button
      onClick={() => {
        if (!value) {
          return;
        }

        onSelected(value);
        router.push('/home');
      }}
      size="floating"
      variant="floating"
    >
      <Image alt="camera" height={74} src="/images/camera.svg" width={74} />
    </Button>
  );
};

export { ButtonCamera };
