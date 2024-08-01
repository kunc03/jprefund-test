'use client';

import { FormField, Heading, Input } from '@/components';
import { cn } from '@/utils';
import { useState } from 'react';
import InputPhone from '../../_components/input-phone';

const FormResetting = ({ t, resetType, form }) => {
  const [selectedPhoneArea, setSelectedPhoneArea] = useState();

  return (
    <>
      {resetType === 'email' && (
        <>
          <p className={cn('text-1522 text-center my-26')}>
            {t('resetByEmail')}
          </p>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                hasForm
                label={t('form.label.email')}
                className={cn('!border rounded-6')}
                placeholder={t('form.placeholder.email')}
                disabled={false}
                {...field}
              />
            )}
          />
        </>
      )}

      {resetType === 'phone' && (
        <>
          <p className={cn('text-1522 text-center my-22')}>
            {t('resetByPhone')}
          </p>

          <div className="flex flex-col gap-3">
            <Heading level={5} className="text-1622 font-medium">
              {t('form.label.phone')}
            </Heading>
            <InputPhone
              setSelectedPhoneArea={setSelectedPhoneArea}
              selectedPhoneArea={selectedPhoneArea}
              form={form}
            />
          </div>
        </>
      )}

      {resetType === 'resetting' && (
        <div className={cn('flex flex-col gap-18 mt-22')}>
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <Input
                hasForm
                label={t('form.label.password')}
                className={cn('!border rounded-6')}
                placeholder={t('form.placeholder.password')}
                disabled={false}
                {...field}
              />
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <Input
                hasForm
                label={t('form.label.passwordConfirmation')}
                className={cn('!border rounded-6')}
                placeholder={t('form.placeholder.passwordConfirmation')}
                disabled={false}
                {...field}
              />
            )}
          />
        </div>
      )}
    </>
  );
};

export { FormResetting };
