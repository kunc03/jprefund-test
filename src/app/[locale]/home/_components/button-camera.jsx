'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ButtonCamera = () => {
  const router = useRouter();

  return (
    <Button
      variant="floating"
      size="floating"
      onClick={() => {
        router.push('/scan');
      }}
    >
      <Image src="/images/qr.svg" alt="logo" width={32} height={32} />
    </Button>
  );
};

export { ButtonCamera };
