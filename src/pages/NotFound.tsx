import { Flex, Title } from '@mantine/core';
import BackToHomeButton from '../components/BackToHomeButton';

function NotFound() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="2rem"
      sx={{ marginTop: '12rem' }}
    >
      <Title color="gray">Oops! You seem to be lost.</Title>
      <BackToHomeButton variant="gradient" />
    </Flex>
  );
}

export default NotFound;
