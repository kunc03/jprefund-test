const formatNumber = (number, isCurrency = false) => {
  const { maximumFractionDigits } = isCurrency
    ? { maximumFractionDigits: 0 }
    : { maximumFractionDigits: 2 };

  const formatterOptions = {
    maximumFractionDigits,
  };

  if (isCurrency) {
    formatterOptions.currencyDisplay = 'code'; // Menggunakan kode (JPY) sebagai simbol
    formatterOptions.style = 'currency';
    formatterOptions.currency = 'JPY';
  }

  const formatter = new Intl.NumberFormat('ja-JP', formatterOptions);
  return formatter.format(number);
};

export { formatNumber };
