import { Flex, Image, Text } from '@mantine/core';

interface Props {
  icon: string;
  name: string;
  symbol: string;
}

const CoinIconNameSymbol = (props: Props) => {
  const { icon, name, symbol } = props;
  return (
    <Flex align="center">
      <Image src={icon} alt={name} mr="sm" width="2rem" />
      <Text fw="bold">{name}</Text>
      <Text color="dimmed" fw="500" sx={{ marginLeft: '.375rem' }}>
        {symbol}
      </Text>
    </Flex>
  );
};

export default CoinIconNameSymbol;
