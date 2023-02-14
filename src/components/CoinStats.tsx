import {
  Box, DefaultProps, Paper, Title,
} from '@mantine/core';
import { Coin } from '../interfaces';

interface Props extends DefaultProps {
  coin: Coin;
}

function CoinStats(props: Props) {
  const { coin, ...styleProps } = props;
  return (
    <Box {...styleProps}>
      <Title order={3} fw="600">
        Market Stats
      </Title>
      <Paper radius="lg" p="xl" withBorder>
        <p>{coin.name}</p>
      </Paper>
    </Box>
  );
}

export default CoinStats;
