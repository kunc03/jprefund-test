'use client';

import { Input, Button, Form as UIForm, FormField } from '@/components';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { useRegistrationOptions } from '../../_hooks/use-registration-options';
import { SuccessDialog } from './success-dialog';
import { useRouter } from 'next/navigation';
import { creditCardSchema, cardType } from '../_schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { isObjectEmpty } from '@/utils';

const ContentCreditCard = () => {
  const t = useTranslations('refundMethod');
  const formRef = useRef();
  const { setData } = useRegistrationOptions();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const form = useForm({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardNumber: '',
      dateOfExpired: '',
      securityCode: '',
    },
  });

  const handleSubmitClick = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  const handleSubmit = (data) => {
    // todo integratin witha api
    setData('1', data);
    setIsSuccess(true);
  };

  const handleOnlyNumeric = (event, maxLength) => {
    const nonNumericKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    const isDigit = /[0-9]/.test(event.key);

    const currentLength = event.target.value.replace(/[^0-9]/g, '').length;

    if (!isDigit && !nonNumericKeys.includes(event.key)) {
      event.preventDefault();
    } else if (isDigit && currentLength >= maxLength) {
      event.preventDefault();
    }
  };

  const detectCardType = (number) => {
    const card = cardType.find((item) => number.match(item.regex));
    setSelectedCard(card ?? {});
  };

  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-145 px-29">
        <div className="mt-27 w-full ">
          <UIForm {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-18"
            >
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => {
                  const handleCardNumberInput = (event) => {
                    const input = event.target.value.replace(/\D/g, ''); // Remove non-digits
                    const formattedInput = input
                      .replace(/(.{4})/g, '$1 ')
                      .trim();
                    detectCardType(formattedInput.replace(/\s+/g, ''));
                    field.onChange(formattedInput);
                  };

                  return (
                    <Input
                      hasForm
                      label={t('cardNumber')}
                      value={field.value}
                      placeholder="1234 1234 1234 1234"
                      disabled={false}
                      onInput={handleCardNumberInput}
                      onKeyDown={(event) => {
                        handleOnlyNumeric(event, 16);
                      }}
                      pre={
                        <Image
                          alt="card"
                          height={34}
                          src={
                            isObjectEmpty(selectedCard)
                              ? '/icons/card-empty.svg'
                              : selectedCard.image
                          }
                          width={34}
                          className="size-34"
                        />
                      }
                      ref={field.ref}
                    />
                  );
                }}
              />
              <FormField
                control={form.control}
                name="dateOfExpired"
                render={({ field }) => {
                  const handleDateInput = (event) => {
                    const input = event.target.value.replace(/[^0-9]/g, '');
                    if (input.length > 4) {
                      return;
                    }
                    let formattedInput = input;
                    if (input.length >= 2) {
                      const month = parseInt(input.slice(0, 2), 10);

                      if (month < 1 || month > 12) {
                        formattedInput = input.slice(0, 2);
                      } else if (input.length > 2) {
                        formattedInput = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
                      }
                    }
                    field.onChange(formattedInput);
                  };

                  return (
                    <Input
                      hasForm
                      value={field.value}
                      label={t('dateOfExpired')}
                      placeholder={t('monthYear')}
                      disabled={false}
                      onInput={handleDateInput}
                      onKeyDown={(event) => {
                        handleOnlyNumeric(event, 4);
                      }}
                      ref={field.ref}
                    />
                  );
                }}
              />
              <FormField
                control={form.control}
                name="securityCode"
                render={({ field }) => (
                  <Input
                    hasForm
                    label={t('securityCode')}
                    placeholder="123"
                    disabled={false}
                    onKeyDown={(event) => {
                      handleOnlyNumeric(event, 3);
                    }}
                    {...field}
                  />
                )}
              />
            </form>
          </UIForm>
        </div>
        <Button
          className="w-173"
          onClick={handleSubmitClick}
          disabled={!form.formState.isValid}
        >
          {t('registration')}
        </Button>
      </div>
      <SuccessDialog
        isOpen={isSuccess}
        type="creditCard"
        onHandleClose={() => router.push('/refund-methods')}
      />
    </>
  );
};

export { ContentCreditCard };
