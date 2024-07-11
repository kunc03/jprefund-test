'use client';

import { Button } from '@/components/ui/button';
import { useFormRef } from '@/hooks';

const ButtonOk = () => {
  const submitForm = useFormRef((state) => state.submitForm);

  const handleClick = () => {
    submitForm();
  };

  return (
    <Button
      className="mb-9 w-249 items-center justify-center"
      onClick={handleClick}
    >
      O K
    </Button>
  );
};

export { ButtonOk };
