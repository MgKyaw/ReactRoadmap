const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const conversionRate = getConversionRate(fromCurrency, toCurrency);
  const newAmount = applyConversionRate(amount, conversionRate);

  return newAmount;
};