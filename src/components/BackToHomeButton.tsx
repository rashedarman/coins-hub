/// <reference types="vite-plugin-svgr/client" />
import { Button, ButtonProps } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconChevronLeft } from '../assets/IconChevronLeft.svg';

type Props = ButtonProps;

function BackToHomeButton(props: Props) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate('/')}
      compact
      variant="subtle"
      color="dark"
      p="0"
      sx={{ '&:hover': { backgroundColor: 'transparent' } }}
      {...props}
    >
      <IconChevronLeft />
    </Button>
  );
}

export default BackToHomeButton;
