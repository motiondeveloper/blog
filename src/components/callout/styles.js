import styled from 'styled-components';
import { colors, padding } from '../../theme';

export const CalloutWrapper = styled.div`
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
export const CalloutContent = styled.div`
  margin: 0;
  p {
    margin: 0;
  }
`;
export const CalloutIcon = styled.div`
  position: absolute;
  left: -${padding.medium};
  box-shadow: 0 0 0 ${padding.xsmall} ${colors.navy};
  background: ${colors.navy};
`;

export const CalloutTitle = styled.div`
  position: absolute;
  top: -${padding.medium};
  box-shadow: 0 0 0 ${padding.xsmall} ${colors.navy};
  background: ${colors.navy};
  color: ${props => props.color};
`;
