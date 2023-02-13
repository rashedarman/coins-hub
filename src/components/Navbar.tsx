import {
  Anchor, Button, Container, Flex, Paper,
} from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <Paper radius={0} shadow="sm" p="sm">
      <Container size="xl">
        <Flex justify="space-between">
          <Anchor
            href="/"
            variant="text"
            c="blue"
            fw={700}
            style={{ fontSize: '1.75rem' }}
          >
            CoinsHub
          </Anchor>
          <Flex align="center" gap="sm">
            <Button
              variant={location.pathname === '/' ? 'light' : 'subtle'}
              component={Link}
              to="/"
            >
              Coins
            </Button>
            <Button
              variant={location.pathname === '/news' ? 'light' : 'subtle'}
              component={Link}
              to="/news"
            >
              News
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Paper>
  );
}

export default Navbar;
