import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { colors, padding, text } from '../theme';

const buttonStyles = css`
  font-weight: ${text.weights.medium};
  margin-right: ${padding.small};
  padding: ${padding.xsmall} ${padding.small};
  border-radius: ${padding.xsmall};
  &&& {
    text-decoration: none;
  }
`;

const primaryStyles = css`
  ${buttonStyles};
  border: 2px solid ${colors.green};
  &&& {
    color: ${colors.green} !important;
    :hover {
      color: ${colors.navy} !important;
      background: ${colors.green};
    }
  }
`;

const secondaryStyles = css`
  ${buttonStyles};
  border: 2px solid ${colors.blue};
  &&& {
    :hover {
      color: ${colors.navy} !important;
      background: ${colors.blue};
    }
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
