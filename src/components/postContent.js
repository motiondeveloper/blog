import styled from 'styled-components';
import { colors, padding, text } from '../theme';

// p img is for images gatsby doesn't support such as svg
// we share styles with gatsby images by separating them
// into an external variable
const imageStyles = `
  margin-bottom: ${padding.large};
  margin-top: ${padding.large};
  max-width: 100% !important;
`;

const PostContent = styled.section`
  margin-bottom: ${padding.xxlarge};
  p {
    color: ${colors.white};
    font-size: ${text.sizes.base};
  }

  video {
    ${imageStyles};
  }

  p img {
    ${imageStyles};
  }

  .gatsby-resp-image-wrapper {
    ${imageStyles};
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 0;
      margin-top: 0;
    }
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
    margin-top: ${padding.large};
    margin-bottom: ${padding.large};
    margin-left: 0;
    margin-right: 0;
    width: ${`calc(100% - ${padding.large * 2})`};
    border: 2px solid ${colors.green};
    border-radius: ${padding.small};
    padding-top: ${padding.small};
    padding-bottom: ${padding.small};
    padding-left: ${padding.large};
    padding-right: ${padding.large};
  }

  ol,
  ul {
    margin-bottom: ${padding.large};
  }

  li {
    margin-bottom: ${padding.small};
  }

  kbd {
    font-family: ${text.monoFont};
    color: ${colors.lightGrey} !important;
    border-radius: 0.3em;
    background: ${colors.black};
    padding: 0.1em 0.3em 0.1em;
    white-space: normal;
    border: 1px solid black;
    box-shadow: 0px 2px 0px 0px black;
  }
`;
export default PostContent;
