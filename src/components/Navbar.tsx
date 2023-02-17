import { Anchor, Container, Paper } from '@mantine/core';

function Navbar() {
  return (
    <Paper radius={0} shadow="sm" p="sm">
      <Container size="xl">
        <Anchor href="/" variant="text" fw={700} fz="xl">
          CoinsHub
        </Anchor>
      </Container>
    </Paper>
  );
}

export default Navbar;
