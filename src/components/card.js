import { colors, padding } from '../theme';
import styled from 'styled-components';

const PostCard = styled.div`
  background-color: ${colors.black};
  border-radius: ${padding.xsmall};
  width: ${`calc(100% + ${padding.large * 2})`};
  padding: ${padding.large};
  margin-left: -${padding.large};
  margin-right: -${padding.large};
  margin-bottom: ${padding.large};
  text-decoration: none;
`;

export default PostCard;
