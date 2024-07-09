const RegistrationInformation = ({ item, t }) => {
  const maskCardNumber = (cardNumber) => {
    return cardNumber.slice(0, -4).replace(/\d/g, '*') + cardNumber.slice(-4);
  };

  if (item.type === 'creditCard')
    return (
      <div className="text-1218 font-normal text-gray">
        <p>{maskCardNumber(item.registrationInformation?.cardNumber ?? '')}</p>
        <p>
          {t('dateOfExpiry')}:{' '}
          {item.registrationInformation?.dateOfExpired ?? '-'}
        </p>
      </div>
    );

  if (item.type === 'cashLess')
    return (
      <div className="text-1218 font-normal text-gray">
        <p>{item.registrationInformation?.type ?? 'asd'}</p>
      </div>
    );

  return <div>asds</div>;
};

export { RegistrationInformation };
