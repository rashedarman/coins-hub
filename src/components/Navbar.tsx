import {
  Anchor, Button, Container, Flex, Paper, Text,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';

function Navbar() {
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
            <Button variant="light">
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Text c="blue">Coins</Text>
              </NavLink>
            </Button>
            <Button variant="subtle">
              <NavLink to="/news" style={{ textDecoration: 'none' }}>
                <Text c="blue">News</Text>
              </NavLink>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Paper>
  );
}

export default Navbar;
