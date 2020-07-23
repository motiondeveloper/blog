import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { GitHub, Twitter } from 'react-feather';

import { colors, padding, text } from '../theme';

const breakpoint = '740px';

const HeaderLink = styled(Link)`
  border-radius: ${padding.xsmall};
  &&& {
    color: ${colors.white};
    :hover {
      color: ${colors.white};
      background-color: ${colors.navy};
    }
  }
  text-decoration: none;
  padding: ${padding.xsmall};
`;

const DesktopLink = styled(HeaderLink)`
  font-size: ${text.sizes.body};
  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

const MobileLink = styled(HeaderLink)`
  font-size: ${text.sizes.bodySmall};
`;

const HomeLink = styled(Link)`
  font-size: ${text.sizes.bodyLarge};
  text-decoration: none;
  font-weight: ${text.weights.medium};
  &&& {
    color: ${colors.white};
  }
`;

const Header = styled.nav`
  background-color: ${colors.black};
  padding: ${padding.medium};
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: auto;
`;

const MobileLinks = styled(HeaderContent)`
  border-top: 2px solid ${colors.navy};
  margin-top: ${padding.medium};
  padding-top: ${padding.small};
  @media (min-width: ${breakpoint}) {
    display: none;
  }
`;

const iconSize = 20;
const HeaderIcon = styled.a`
  height: ${`${iconSize}px`};
  color: ${colors.blue};
  :hover {
    color: ${colors.yellow};
  }
  :not(:last-child) {
    margin-right: ${padding.small};
  }
`;

const LogoImage = styled(Image)`
  margin-right: ${padding.small};
  margin-bottom: 0;
  min-width: ${`${iconSize}px`};
`;

const ItemGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = ({ imageSource }) => {
  return (
    <ItemGroup>
      <LogoImage
        fixed={imageSource}
        alt={'Motion Developer Logo'}
        imgStyle={{ borderRadius: `50%` }}
      />
      <HomeLink to={`/`}>Motion Developer</HomeLink>
    </ItemGroup>
  );
};

const PageHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/md-logo.png/" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            twitter
          }
        }
      }
    }
  `);
  const { social } = data.site.siteMetadata;

  return (
    <Header>
      <HeaderContent>
        <Logo imageSource={data.avatar.childImageSharp.fixed} />
        <DesktopLink to={`/contact`}>Contact</DesktopLink>
        <DesktopLink to={`/blog`}>Blog</DesktopLink>
        <DesktopLink to={`/blog/basics-introduction`}>
          Expression Basics
        </DesktopLink>
        <DesktopLink to={`/blog/how-to-animate-with-expressions`}>
          eKeys
        </DesktopLink>
        <ItemGroup>
          <HeaderIcon
            href={`https://twitter.com/${social.twitter}`}
            aria-label="Twitter profile"
          >
            <Twitter size={iconSize} />
          </HeaderIcon>
          <HeaderIcon
            href={`https://github.com/${social.github}`}
            aria-label="Github profile"
          >
            <GitHub size={iconSize} />
          </HeaderIcon>
        </ItemGroup>
      </HeaderContent>
      <MobileLinks>
        <MobileLink to={`/contact`}>Contact</MobileLink>
        <MobileLink to={`/blog`}>Blog</MobileLink>
        <MobileLink to={`/blog/basics-introduction`}>
          Expression Basics
        </MobileLink>
        <MobileLink to={`/blog/how-to-animate-with-expressions`}>
          eKeys
        </MobileLink>
      </MobileLinks>
    </Header>
  );
};

export default PageHeader;
