import styled from 'styled-components';
import { colors, padding, text } from '../theme';

const Copy = styled.p`
  font-size: ${text.sizes.body};
  :last-of-type {
    margin-bottom: ${padding.large};
  }
`;

const HeadingSmall = styled.p`
  color: ${colors.white};
  font-size: ${text.sizes.body};
  font-weight: ${text.weights.bold};
  &&& {
    margin-top: ${padding.xxlarge};
    margin-bottom: ${padding.large};
  }
`;

const HeadingLarge = styled.p`
  font-size: ${text.sizes.headingSmall};
  font-weight: ${text.weights.bold};
  color: ${colors.yellow};
  &&& {
    margin-top: 0;
    margin-bottom: ${padding.small};
  }
`;

export { Copy, HeadingSmall, HeadingLarge };
