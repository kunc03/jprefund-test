/* eslint-disable no-unused-vars */

'use client';

import {
  Heading,
  Button,
  Form as UIForm,
  FormField,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { useRegistrationOptions } from '../../_hooks/use-registration-options';
import { SuccessDialog } from './success-dialog';
import { useRouter } from 'next/navigation';
import { bankTransferSchema, country } from '../_schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

const ContentBankTransfer = () => {
  const t = useTranslations('refundMethod');
  const formRef = useRef();
  const { setData } = useRegistrationOptions();
  const router = useRouter();
  const [selectedFinancialInstituteName, setSelectedFinancialInstituteName] =
    useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(bankTransferSchema),
    defaultValues: {
      financialInstituteName: '',
      branchName: '',
      accountNumber: '',
      accountType: '',
      firstName: '',
      lastName: '',
    },
  });

  const handleSubmitClick = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  };

  const handleSubmit = (data) => {
    // todo integratin witha api
    setData('2', data);
    setIsSuccess(true);
  };

  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-145 px-29">
        <div className="mt-40 w-full">
          <Heading className="text-center text-1527 font-medium">
            {t('pleaseSelectYourFinancialInstitution')}
          </Heading>
          {!isSelected && (
            <div className="mt-13">
              <Select
                defaultValue={country[0].value}
                onValueChange={(value) => {
                  setSelectedFinancialInstituteName(value);
                }}
              >
                <SelectTrigger
                  className="size-full font-bold focus:!outline-none focus:!ring-transparent"
                  value={selectedFinancialInstituteName}
                >
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {country.map((item) => {
                    return (
                      <SelectItem value={item.value} key={item.value}>
                        <div className="flex flex-row items-center gap-10">
                          <Image
                            alt="card"
                            height={34}
                            src={item.image}
                            width={34}
                            className="size-34"
                          />

                          <p className="text-1613 font-medium text-black">
                            {item.value}
                          </p>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}
          {isSelected && (
            <UIForm {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(handleSubmit)}
                className="mt-46"
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => {
                    return <div {...field}>asd</div>;
                  }}
                />
              </form>
            </UIForm>
          )}
        </div>
        {isSelected && (
          <Button
            className="w-173"
            onClick={handleSubmitClick}
            disabled={!form.formState.isValid}
          >
            {t('registration')}
          </Button>
        )}
      </div>
      <SuccessDialog
        isOpen={isSuccess}
        type="bankTransfer"
        onHandleClose={() => router.push('/refund-methods')}
      />
    </>
  );
};

export { ContentBankTransfer };
