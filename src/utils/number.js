const formatNumber = (number, isCurrency = false) => {
  const { maximumFractionDigits } = isCurrency
    ? { maximumFractionDigits: 0 }
    : { maximumFractionDigits: 2 };

  const formatterOptions = {
    maximumFractionDigits,
  };

  if (isCurrency && number > 0) {
    formatterOptions.currencyDisplay = 'code'; // Menggunakan kode (JPY) sebagai simbol
    formatterOptions.style = 'currency';
    formatterOptions.currency = 'JPY';
  }

  const formatter = new Intl.NumberFormat('ja-JP', formatterOptions);

  if (number < 0 && isCurrency) return `JPY ${formatter.format(number)}`;
  return formatter.format(number);
};

const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export { formatNumber, isObjectEmpty };
