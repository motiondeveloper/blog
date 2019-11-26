import styled from 'styled-components';
import { colors, padding } from '../theme';

const Divider = styled.hr`
  margin-top: ${padding.large};
  margin-bottom: ${padding.large};
  border-top: 2px solid ${colors.black};
`;
export default Divider;
