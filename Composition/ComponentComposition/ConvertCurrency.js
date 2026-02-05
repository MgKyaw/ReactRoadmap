const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const conversionRate = getConversionRate(fromCurrency, toCurrency);
  const newAmount = applyConversionRate(amount, conversionRate);

  return newAmount;
};

const convertCurrency2 = (amount, fromCurrency, toCurrency) => compose(
    applyConversionRate(amount),
    getConversionRate(fromCurrency, toCurrency),
  );