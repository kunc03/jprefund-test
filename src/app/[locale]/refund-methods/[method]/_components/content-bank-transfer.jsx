/* eslint-disable no-unused-vars */

'use client';

import {
  Heading,
  Button,
  Form as UIForm,
  FormField,
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  Input,
  SelectContent,
} from '@/components';
import { useTranslations } from 'next-intl';
import { useRef, useState, useEffect } from 'react';
import { useRegistrationOptions } from '../../_hooks/use-registration-options';
import { SuccessDialog } from './success-dialog';
import { useRouter } from 'next/navigation';
import { bankTransferSchema, country } from '../_schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { cn } from '@/utils';

const ContentBankTransfer = () => {
  const t = useTranslations('refundMethod');
  const formRef = useRef();
  const { data: registerOptionData, setData } = useRegistrationOptions();
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(country[0].value);
  const [selectedFinancialInstituteName, setSelectedFinancialInstituteName] =
    useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { registrationInformation } = registerOptionData[1];

  const form = useForm({
    resolver: zodResolver(bankTransferSchema),
    defaultValues: {
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
    const payload = {
      financialInstituteName: selectedFinancialInstituteName,
      ...data,
    };
    setData('2', payload);
    setIsSuccess(true);
  };

  useEffect(() => {
    let timer;
    if (selectedFinancialInstituteName) {
      timer = setTimeout(() => {
        setIsSelected(true);
        setData('2', {
          financialInstituteName: selectedFinancialInstituteName,
        });
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [selectedFinancialInstituteName, form, setData]);

  useEffect(() => {
    if (!registrationInformation.financialInstituteName && isSelected) {
      setIsSelected(false);
    }
  }, [registrationInformation, isSelected]);
  console.log(form);
  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-9 pb-2">
        <div
          className={cn(' flex w-full flex-col ', !isSelected && 'grow mt-40')}
        >
          {!isSelected && (
            <>
              <Heading className="text-center text-1527 font-medium">
                {t('pleaseSelectYourFinancialInstitution')}
              </Heading>
              <div className="mt-13 flex h-full grow flex-col ">
                <div className="px-29">
                  <Select
                    defaultValue={selectedCountry}
                    onValueChange={(value) => {
                      setSelectedCountry(value);
                    }}
                  >
                    <SelectTrigger
                      className="size-full font-bold focus:!outline-none focus:!ring-transparent"
                      value={selectedCountry}
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
                <div className="mt-26 h-full max-h-[calc(100dvh-250px)] grow overflow-y-auto bg-white">
                  <ul className="list-none pl-17.5">
                    {country
                      .filter((item) => item.value === selectedCountry)
                      .map((item) => {
                        return item.listOfBanks.map((bank) => (
                          <li
                            key={bank}
                            onClick={() =>
                              setSelectedFinancialInstituteName(bank)
                            }
                            aria-hidden="true"
                          >
                            <div className="flex h-58 cursor-pointer flex-row items-center justify-between border-b border-b-gray-500 py-22.5 pl-8">
                              <p className="text-1613 font-medium text-black">
                                {bank}
                              </p>

                              {selectedFinancialInstituteName === bank && (
                                <Image
                                  alt="checklist"
                                  height={18}
                                  src="/icons/checklist.svg"
                                  width={18}
                                  className="size-auto pr-22.5"
                                />
                              )}
                            </div>
                          </li>
                        ));
                      })}
                  </ul>
                </div>
              </div>
            </>
          )}
          {isSelected && (
            <UIForm {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(handleSubmit)}
                className="mt-25 flex flex-col gap-18 px-28"
              >
                <div className="flex flex-col gap-16">
                  <p className="text-1422 font-medium text-gray">
                    {t('financialInstitutionName')}
                  </p>
                  <p className="pl-14 text-2022 font-medium text-gray">
                    {selectedFinancialInstituteName ?? '-'}
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="branchName"
                  render={({ field }) => {
                    return (
                      <Select
                        defaultValue={field.value}
                        disabled={false}
                        hasForm
                        isRequired
                        isResponsive
                        label={t('branchName')}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger hasForm value={field.value}>
                          <SelectValue
                            placeholder={t('placeholder.pleaseSelect')}
                          />
                        </SelectTrigger>
                        <SelectContent isInsideModal>
                          <SelectItem value="N.A. Tokyo Branch">
                            N.A. Tokyo Branch
                          </SelectItem>
                          <SelectItem value="Kyoto Branch">
                            Kyoto Branch
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => {
                    return (
                      <Input
                        hasForm
                        label={t('accountNumber')}
                        placeholder="0000000000"
                        disabled={false}
                        {...field}
                        type="number"
                      />
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => {
                    return (
                      <Select
                        defaultValue={field.value}
                        disabled={false}
                        hasForm
                        isRequired
                        isResponsive
                        label={t('accountType')}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger hasForm value={field.value}>
                          <SelectValue
                            placeholder={t('placeholder.pleaseSelect')}
                          />
                        </SelectTrigger>
                        <SelectContent isInsideModal>
                          <SelectItem value="Ordinary deposit">
                            Ordinary deposit
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => {
                    return (
                      <Input
                        hasForm
                        value={field.value}
                        label={t('firstName')}
                        disabled={false}
                        placeholder={t('placeholder.firstName')}
                        {...field}
                      />
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => {
                    return (
                      <Input
                        hasForm
                        value={field.value}
                        label={t('lastName')}
                        disabled={false}
                        placeholder={t('placeholder.lastName')}
                        className="!h-50  !px-14 !py-18"
                        {...field}
                      />
                    );
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
