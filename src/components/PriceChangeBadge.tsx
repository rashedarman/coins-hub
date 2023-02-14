import { Badge } from '@mantine/core';

interface Props {
  priceChange: number;
}

const PriceChangeBadge = (props: Props) => {
  const { priceChange } = props;
  return (
    <div>
      {priceChange < 0 ? (
        <Badge color="red" size="lg" radius="sm">
          &#9660;
          {priceChange}
          %
        </Badge>
      ) : (
        <Badge color="green" size="lg" radius="sm">
          &#9650;
          {priceChange}
          %
        </Badge>
      )}
    </div>
  );
};

export default PriceChangeBadge;
