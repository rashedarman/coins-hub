/// <reference types="vite-plugin-svgr/client" />
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconHome } from '../assets/IconHome.svg';

function BackToHomeButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')} leftIcon={<IconHome />}>
      Back to Home
    </Button>
  );
}

export default BackToHomeButton;
