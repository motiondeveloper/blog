import styled from 'styled-components';
import { colors, text, padding } from '../theme';

const PageHeading = styled.h1`
  color: ${colors.green};
  font-size: ${text.sizes.headingLarge};
  &&& {
    margin-top: ${padding.xxlarge};
  }
  @media (max-width: 640px) {
    font-size: calc(${text.sizes.headingLarge} / 1.2);
  }
`;

export default PageHeading;
