import React from 'react';
import styled from 'styled-components';

import Newsletter from './newsletterSignup';
import Bio from './bio';
import HorizontalList from './horizontalList';

import { colors, padding, text } from '../theme';
import { Link } from 'gatsby';

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: ${padding.xxlarge};
  padding: 0;
  padding-bottom: ${padding.large};
  background-color: ${colors.black};
`;

const FooterContent = styled.div`
  padding: ${padding.large} ${padding.medium} 0 ${padding.medium};
  max-width: 640px;
  margin: 0 auto;
  min-height: 320px;
`;

const FooterLinks = styled(HorizontalList)`
  align-items: center;
  margin: auto;
  border-top: 2px solid ${colors.navy};
  margin-top: ${padding.large};
  padding-top: ${padding.medium};
  li {
    margin-bottom: ${padding.small};
    :not(:last-child) {
      margin-right: ${padding.large};
    }
  }
`;

const FooterLink = styled(Link)`
  font-size: ${text.sizes.bodySmall};
  color: ${colors.grey};
  text-decoration: none;
  :hover {
    color: ${colors.blue};
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Newsletter
          mb={padding.large}
          mt={padding.large}
          bgColor={colors.navy}
        />
        <Bio />
        <FooterLinks>
          <li>
            <FooterLink to={`/`}>Home</FooterLink>
          </li>
          <li>
            <FooterLink to={`/contact`}>Contact</FooterLink>
          </li>
          <li>
            <FooterLink to={`/blog`}>Blog</FooterLink>
          </li>
          <li>
            <FooterLink to={`/blog/basics-introduction`}>
              Expressions Course
            </FooterLink>
          </li>
          <li>
            <FooterLink to={`/blog/how-to-animate-with-expressions`}>
              eKeys
            </FooterLink>
          </li>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
