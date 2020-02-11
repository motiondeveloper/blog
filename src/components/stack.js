import styled from 'styled-components';
import HorizontalList from './horizontalList';
import { padding } from '../theme';

export const StackItem = styled.li`
  width: min(max(40%, 300px), 100%);
  flex-grow: 1;
  :not(:last-child) {
    margin-right: ${padding.large};
    margin-bottom: ${padding.xlarge};
  }
`;

export const HorizontalStack = styled(HorizontalList)`
  margin-top: ${props => props.mt};
  justify-content: space-between;
`;
