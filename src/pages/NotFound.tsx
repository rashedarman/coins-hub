import { Button, Flex, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconHome } from '../assets/IconHome.svg';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="2rem"
      sx={{ marginTop: '12rem' }}
    >
      <Title>Oops! You seem to be lost.</Title>
      <Button onClick={() => navigate('/')} leftIcon={<IconHome />}>
        Back To Home
      </Button>
    </Flex>
  );
}

export default NotFound;
