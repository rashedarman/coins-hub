import {
  Anchor, Button, Container, Flex, Paper,
} from '@mantine/core';

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
              <Anchor href="/coins" variant="text">
                Coins
              </Anchor>
            </Button>
            <Button variant="subtle">
              <Anchor href="/news" variant="text">
                News
              </Anchor>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Paper>
  );
}

export default Navbar;
