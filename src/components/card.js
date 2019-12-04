import { colors, padding, text } from '../theme';
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
  transition: 0.2s ease;
  :hover {
    background-color: ${colors.black + '90'};
  }
`;

export default PostCard;