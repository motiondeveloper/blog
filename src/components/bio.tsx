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

const StyledBio = styled.div`
  display: flex;

  p {
    margin-top: 0;
    line-height: 150%;
  }
  a {
    color: ${colors.blue};
  }
`;

const BioImage = styled(Image)`
  margin-right: ${padding.large};
  margin-bottom: 0;
  min-width: 50px;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/md-logo.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `);

  const {
    author,
    social,
  }: {
    author: string;
    social: { [propName: string]: string };
  } = data.site.siteMetadata;
  return (
    <StyledBio>
      <BioImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>
        Articles on Adobe After Effects, JavaScript, templates, and everything
        in between. Connect with us on{' '}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>,{' '}
        <a href={`https://instagram.com/${social.instagram}`}>Instagram</a>
        {` `}or{` `}
        <a href={`https://github.com/${social.github}`}>Github.</a>
      </p>
    </StyledBio>
  );
};

export default Bio;
