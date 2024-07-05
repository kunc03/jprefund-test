import { Heading, Input } from '@/components';
import { cn } from '@/utils';
import { InputDate, SelectOptions } from '../../_components';

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
        placeholder={t('firstName')}
        defaultValue={'Joni'}
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[6px] focus:!border-red hover:!border-red',
        )}
      />

      {/* Lastname */}
      <Heading level={5} className="text-1422 font-medium">
        {t('lastName')}
      </Heading>

      <Input
        placeholder={t('lastName')}
        defaultValue={'Mitchell'}
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[6px] focus:!border-red hover:!border-red',
        )}
      />

      {/* Date of birth */}
      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfBirth')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfBirth}
        label={t('dateOfBirth')}
        defaultValue={'1997.9.25'}
        onHandleSelected={handleSelectedDateOfBirth}
        filter={formId}
        isSelected={hasDateOfBirth}
      />

      {/* Passport number */}
      <Heading level={5} className="text-1422 font-medium">
        {t('passportNumber')}
      </Heading>

      <Input
        placeholder={t('passportNumber')}
        defaultValue={'00000000'}
        type="number"
        className={cn(
          'h-[50px] text-gray border-gray-300 border rounded-[6px] focus:!border-red hover:!border-red',
        )}
      />

      {/* Date of expiry */}
      <Heading level={5} className="text-1422 font-medium">
        {t('dateOfExpiry')}
      </Heading>

      <InputDate
        selectedDate={formId.dateOfExpiry}
        label={t('dateOfExpiry')}
        onHandleSelected={handleSelectedDateOfExpiry}
        filter={formId}
        isSelected={'hasDateOfExpiry'}
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
