/// <reference types="vite-plugin-svgr/client" />
import { Button, ButtonProps } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconHome } from '../assets/IconHome.svg';

type Props = ButtonProps

function BackToHomeButton(props: Props) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')} leftIcon={<IconHome />} {...props}>
      Back to Home
    </Button>
  );
}

export default BackToHomeButton;
