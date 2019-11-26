import styled from 'styled-components';
import { colors, padding } from '../theme';

const Divider = styled.hr`
  border: 2px solid ${colors.black};
  margin-top: ${padding.large};
  margin-bottom: ${padding.large};
`;

export default Divider;
