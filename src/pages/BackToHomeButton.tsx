/// <reference types="vite-plugin-svgr/client" />
import { Button } from '@mantine/core';
import { ReactComponent as IconHome } from '../assets/IconHome.svg';

function BackToHomeButton() {
  return <Button leftIcon={<IconHome />}>Back to Home</Button>;
}

export default BackToHomeButton;
