const cardType = [
  {
    value: 'VISA',
    regex: /^4[0-9]{5}/,
    image: '/icons/master-card.svg', // ini perlu di ganti
  },
  {
    value: 'MASTERCARD',
    regex:
      /^5[1-5][0-9]{4}|^222[1-9][0-9]{3}|^22[3-9][0-9]{4}|^2[3-6][0-9]{5}|^27[01][0-9]{4}|2720[0-9]{3}/,
    image: '/icons/master-card.svg',
  },
  {
    value: 'AMERICANEXPRESS',
    regex: /^3[47][0-9]{4}/,
    image: '/icons/master-card.svg', // ini perlu di ganti
  },
  {
    value: 'DISCOVER',
    regex: /^(6011|65[0-9]{2}|64[4-9][0-9])|6[0-9]{3}/,
    image: '/icons/master-card.svg', // ini perlu di ganti
  },
];

export { cardType };
