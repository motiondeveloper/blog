import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors, padding } from '../theme';

const buttonStyles = `
    margin-right: ${padding.small};
    text-decoration: none;
    padding: ${padding.xsmall} ${padding.small};
    border-radius: ${padding.xsmall};
    margin-right: ${padding.small};
    text-decoration: none;
    padding: ${padding.xsmall} ${padding.small};
    border-radius: ${padding.xsmall};
`;

const primaryStyles = `
    ${buttonStyles};
    border: 2px solid ${colors.green};
    color: ${colors.green} !important;
    :hover {
        color: ${colors.navy} !important;
        background: ${colors.green};
      }
`;

const secondaryStyles = `
    ${buttonStyles};
    border: 2px solid ${colors.blue};
    :hover {
        color: ${colors.navy} !important;
        background: ${colors.blue};
    }
`;

const LinkButton = ({ isLocal, type, children, ...rest }) => {
  const styles = type === 'primary' ? primaryStyles : secondaryStyles;
  const LocalButton = styled(Link)`
    ${styles}
  `;
  const ExternalButton = styled.a`
    ${styles}
  `;
  return isLocal ? (
    <LocalButton {...rest}>{children}</LocalButton>
  ) : (
      <ExternalButton {...rest}>{children}</ExternalButton>
    );
};

export default LinkButton;
