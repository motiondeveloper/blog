import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled, { createGlobalStyle } from 'styled-components';

import { colors, padding, text } from '../theme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.navy};
    font-family: ${text.bodyFont};
    color: ${colors.white};
  }
`;

const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
  padding-left: ${padding.large};
  padding-right: ${padding.large};

  a {
    color: ${colors.blue};
  }

  a:hover {
    text-decoration: none;
  }

  p {
    line-height: 150%;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const HeaderLink = styled(Link)`
  &&& {
    color: ${colors.white};
    :hover {
      text-decoration: underline;
    }
  }
  box-shadow: none;
  text-decoration: none;
  font-size: ${text.sizes.headingSmall};
  font-weight: ${text.weights.regular};
  margin: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: auto;
  margin-top: ${padding.large};
  background-color: ${colors.black};
  border-radius: ${padding.small};
  padding: ${padding.small};
`;

const HeaderLeft= styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderRight= styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${padding.xsmall};
`;

const LogoImage = styled(Image)`
  margin-right: ${padding.small};
  margin-bottom: 0;
  min-width: 36px;
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      avatar: file(absolutePath: { regex: "/md-logo.png/" }) {
        childImageSharp {
          fixed(width: 36, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
      <LogoImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: `50%` }}
      />
  );
}

const PageHeader = ({ title }) => {
  return (
    <Header>
        <HeaderLeft>
            <Logo />
            <HeaderLink to={`/`}>{title}</HeaderLink>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLink to={`/blog`}>Blog</HeaderLink>
        </HeaderRight>
    </Header>
  );
};

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyles />
        <nav>
          <PageHeader title={title} />
        </nav>
      <Page>
        <main>{children}</main>
      </Page>
    </>
  );
};

export default Layout;
