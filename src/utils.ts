export const priceToKMB = (num: number) => {
  // If the number is greater than or equal to 1 billion
  if (num >= 1000000000) return `$${(num / 1000000000).toFixed(1)}B`;

  // If the number is greater than or equal to 1 million
  if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;

  // If the number is greater than or equal to 1000 million
  if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;

  // Otherwise return num as it is
  return `$${num}`;
};

export const formatCoinPrice = (price: number) => {
  const formattedPrice = price < 1
    ? price.toFixed(6)
    : price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return `$${formattedPrice}`;
};
