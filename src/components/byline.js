/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styled from 'styled-components';
import { padding, colors } from '../theme';

const StyledByline = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${padding.small};

  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 150%;
  }
  a {
    color: ${colors.white};
    text-decoration: none;
    :hover {
      ${colors.blue};
      text-decoration: underline;
    }
  }
`;

const BylineImage = styled(Image)`
  margin-right: ${padding.small};
  margin-bottom: 0;
  min-width: 36px;
`;

const Byline = ({ author }) => {
  const data = useStaticQuery(graphql`
    query BylineQuery {
      allFile(filter: { dir: { regex: "/authorPhotos/" } }) {
        nodes {
          name
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);
  const authorPhoto = data.allFile.nodes.find(node => node.name === author.id);
  return (
    <StyledByline>
      <BylineImage
        fixed={authorPhoto.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>
        <a href={author.website}>{author.name}</a>
      </p>
    </StyledByline>
  );
};

export default Byline;
