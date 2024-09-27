export const formatPrice = (price) => {
  if (typeof Intl === 'undefined') {
    return `${(price / 100).toFixed(2)} €`;
  }
  // eslint-disable-next-line no-undef
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price / 100);
};
