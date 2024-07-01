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
      className="fixed bottom-10 flex w-full justify-center md:max-w-md"
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
      >
        <Image alt="logo" height={32} src="/images/qr.svg" width={32} />
      </Button>
    </motion.div>
  );
};

export { ButtonCamera };
