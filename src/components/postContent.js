import styled from "styled-components"
import { colors, padding, text } from '../theme';

const PostContent = styled.div`
  p {
    color: colors.${colors.white};
    font-size: ${text.sizes.base};
  }

  h2 {
    color: ${colors.yellow};
    font-size: ${text.sizes.headingSmall};
    font-weight: ${text.weights.bold};
    margin-top: ${padding.xlarge};
    margin-bottom: ${padding.large};
  }

  blockquote {
    color: ${colors.white};
    border-left-color: ${colors.yellow};
    border-left-width: 4px;
    margin-left: 0,
  }

  ul {
    margin-left: ${padding.large};
  }

  li {
    margin-bottom: ${padding.xsmall};
  }
`
export default PostContent;