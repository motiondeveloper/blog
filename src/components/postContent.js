import styled from 'styled-components';
import { colors, padding, text } from '../theme';

const PostContent = styled.div`
  p {
    color: ${colors.white};
    font-size: ${text.sizes.base};
  }

  img {
    margin-bottom: ${padding.large};
    max-width: 100%;
  }

  h2 {
    color: ${colors.yellow};
    font-size: ${text.sizes.headingSmall};
    font-weight: ${text.weights.bold};
    margin-top: ${padding.xlarge};
    margin-bottom: ${padding.large};
  }

  h3 {
    margin-top: ${padding.large};
  }

  blockquote {
    p {
      color: ${colors.white};
    }
    margin-left: 0;
    margin-right: 0;
    width: ${`calc(100% - ${padding.large * 2})`};
    border: 2px solid ${colors.yellow};
    border-radius: ${padding.small};
    padding-top: ${padding.small};
    padding-bottom: ${padding.small};
    padding-left: ${padding.large};
    padding-right: ${padding.large};
  }

  li {
    margin-bottom: ${padding.xsmall};
  }
`;
export default PostContent;
