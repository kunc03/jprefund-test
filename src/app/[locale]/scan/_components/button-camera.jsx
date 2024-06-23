'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQrScan } from '@/hooks/use-qr-scan';

const ButtonCamera = () => {
  const router = useRouter();
  const { value, onSelected } = useQrScan();

  return (
    <Button
      variant="floating"
      size="floating"
      onClick={() => {
        onSelected(value);
        router.push('/home');
      }}
    >
      <Image src="/images/camera.svg" alt="camera" width={74} height={74} />
    </Button>
  );
};

export { ButtonCamera };
