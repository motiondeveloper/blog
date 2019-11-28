import styled from 'styled-components';
import { colors, text, padding } from '../theme';

const PageHeading = styled.h1`
  color: ${colors.green};
  font-size: ${text.sizes.headingLarge};
  &&& {
    margin-top: ${padding.xlarge};
  }
`;

export default PageHeading;
