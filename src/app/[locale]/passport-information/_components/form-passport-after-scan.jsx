import { Heading, Input } from '@/components';
import { InputDate } from './input-date';
import { SelectOptions } from './select';
import { cn } from '@/utils';

const PassportForm = ({
  t,
  formId,
  handleSelectedDateOfBirth,
  handleSelectedDateOfExpiry,
  hasDateOfBirth,
  hasDateOfExpiry,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Firstname */}
      <Heading level={5} className="text-1422 font-medium">
        {t('firstName')}
      </Heading>

      <Input
        placeholder={'Joni'}
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[4px] focus:!border-red hover:!border-red',
        )}
      />

      {/* Lastname */}
      <Heading level={5} className="text-1422 font-medium">
        {t('lastName')}
      </Heading>

      <Input
        placeholder={'Mitchell'}
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[4px] focus:!border-red hover:!border-red',
        )}
      />

      {/* Date of birth */}
      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfBirth')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfBirth}
        label={'DD/MM/YY'}
        onHandleSelected={handleSelectedDateOfBirth}
        filter={formId}
        isSelected={hasDateOfBirth}
      />

      {/* Passport number */}
      <Heading level={5} className="text-1422 font-medium">
        {t('passportNumber')}
      </Heading>

      <Input
        placeholder={'00000000'}
        type="number"
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[4px] focus:!border-red hover:!border-red',
        )}
      />

      {/* Date of expiry */}
      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfExpiry')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfExpiry}
        label={'DD/MM/YY'}
        onHandleSelected={handleSelectedDateOfExpiry}
        filter={formId}
        isSelected={hasDateOfExpiry}
      />

      {/* Passport issuing country */}
      <Heading level={5} className="text-1422 font-medium">
        {t('passportIssuingCountry')}
      </Heading>

      <SelectOptions values={['USA', 'IDN', 'JP']} t={t} />

      {/* Country of issue code */}
      <Heading level={5} className="text-1422 font-medium">
        {t('countryOfIssueCode')}
      </Heading>

      <SelectOptions values={['USA', 'IDN', 'JP']} t={t} />

      {/* Gender */}
      <Heading level={5} className="text-1422 font-medium">
        {t('gender')}
      </Heading>

      <SelectOptions values={['Male', 'Female']} t={t} />
    </div>
  );
};

export { PassportForm };
