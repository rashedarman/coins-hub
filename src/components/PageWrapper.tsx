import { Container } from '@mantine/core';
import PropTypes from 'prop-types';

type Props = {
  children?: React.ReactNode;
};

function PageWrapper({ children }: Props) {
  return <Container>{children}</Container>;
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
