import { Text } from '@mantine/core';

interface Props {
  price: number;
}

const CoinPriceText = (props: Props) => {
  const { price } = props;
  return (
    <Text fw="500">
      $
      {price < 1
        ? price.toFixed(6)
        : price.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
    </Text>
  );
};

export default CoinPriceText;
