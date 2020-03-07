import React from 'react';
import styled from 'styled-components';

import { CornerDownRight } from 'react-feather';
import { colors, padding } from '../theme';

const StyledCallout = styled.div`
  position: relative;
  z-index: -1;
  p {
    color: ${colors.white};
  }
  margin-top: -${padding.medium};
  margin-bottom: ${padding.large};
  margin-left: ${padding.medium};
  margin-right: 0;
  padding: 0;
  padding-left: ${padding.large};
  .gatsby-highlight {
    background-color: ${colors.navy};
    border: 2.5px solid ${colors.black};
    border-radius: ${padding.small};
    margin-top: -${padding.large};
  }
`;

const CalloutContent = styled.div`
  position: relative;
  top: -${padding.xsmall};
  margin: 0;
  p {
    margin: 0;
  }
`;

const CalloutIcon = styled.div`
  position: absolute;
  left: -${padding.medium};
`;

const Successful = ({ children }) => {
  return (
    <StyledCallout color={colors.green}>
      <CalloutIcon>
        <CornerDownRight size={padding.large} color={colors.green} />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </StyledCallout>
  );
};

const Errorful = ({ children }) => {
  return (
    <StyledCallout color={colors.red}>
      <CalloutIcon>
        <CornerDownRight size={padding.large} color={colors.red} />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </StyledCallout>
  );
};

export { Successful, Errorful };
