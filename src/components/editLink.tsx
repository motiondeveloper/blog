import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Edit3 } from 'react-feather';

import { colors, padding } from '../theme';

const EditLink = ({ page }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repoUrl
        }
      }
    }
  `);
  return (
    <div>
      <Edit3
        css={`
          position: relative;
          top: 6px;
          margin-right: ${padding.xsmall};
        `}
        size={20}
        color={colors.grey}
      />
      <a
        css={`
          &&& {
            color: ${colors.grey};
            :hover {
              text-decoration: underline;
              background-color: ${colors.grey + 22};
            }
          }
        `}
        href={`${data.site.siteMetadata.repoUrl}/blob/master/content/blog/${page.parent.relativePath}`}
      >
        Edit this post on GitHub
      </a>
    </div>
  );
};

export default EditLink;

export const fragment = graphql`
  fragment EditLinkMdx on Mdx {
    parent {
      ... on File {
        relativePath
      }
    }
  }
`;
