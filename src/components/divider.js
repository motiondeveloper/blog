import styled from 'styled-components';
import { colors, padding } from '../theme';

const Divider = styled.hr`
  && {
    margin-top: ${props => props.mt || padding.large};
    margin-bottom: ${props => props.mb || padding.large};
  }
  border: 2px solid ${colors.black};
  margin-top: ${padding.large};
  margin-bottom: ${padding.large};
`;

export default Divider;
