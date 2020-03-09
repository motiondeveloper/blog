import React from 'react';
import styled from 'styled-components';

import { BookOpen } from 'react-feather';
import { colors, padding } from '../theme';

const StyledCallout = styled.div`
  position: relative;
  p {
    color: ${colors.white};
  }
  margin-top: ${padding.large};
  margin-bottom: ${padding.large};
  margin-left: 0;
  margin-right: 0;
  border: 2.5px solid ${props => props.color};
  border-radius: ${padding.small};
  padding: ${padding.large};
`;

const CalloutContent = styled.div`
  margin: 0;
  p {
    margin: 0;
  }
`;

const CalloutIcon = styled.div`
  position: absolute;
  left: -${padding.medium};
  box-shadow: 0 0 0 ${padding.xsmall} ${colors.navy};
  background: ${colors.navy};
`;

const CalloutTitle = styled.div`
  position: absolute;
  top: -${padding.medium};
  box-shadow: 0 0 0 ${padding.xsmall} ${colors.navy};
  background: ${colors.navy};
  color: ${props => props.color};
`;

const RelatedContent = ({ children }) => {
  return (
    <StyledCallout color={colors.black}>
      <CalloutTitle color={colors.green}>
        <h2>Continue reading</h2>
      </CalloutTitle>
      <CalloutIcon>
        <BookOpen size={padding.large} color={colors.green} />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </StyledCallout>
  );
};

export default RelatedContent;
