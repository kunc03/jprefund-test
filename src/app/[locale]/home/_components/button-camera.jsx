'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components';
import { slideScanner } from '@/utils';

const ButtonCamera = () => {
  const router = useRouter();

  return (
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      variants={slideScanner}
    >
      <Button
        onClick={() => {
          router.push('/scan');
        }}
        size="floating"
        variant="floating"
        className="absolute inset-x-1/2 bottom-0 z-50 -translate-x-1/2 -translate-y-1/4 bg-red"
      >
        <Image alt="logo" height={32} src="/images/qr.svg" width={32} />
      </Button>
    </motion.div>
  );
};

export { ButtonCamera };
