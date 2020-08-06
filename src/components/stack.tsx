import styled from 'styled-components';
import HorizontalList from './horizontalList';
import { padding } from '../theme';

export const StackItem = styled.li`
  width: 40%;
  min-width: 300px;
  flex-grow: 1;
  :not(:last-child) {
    margin-right: ${padding.large};
    margin-bottom: ${padding.xlarge};
  }
`;

export const HorizontalStack = styled(HorizontalList)`
  margin-top: 0;
  justify-content: space-between;
`;
