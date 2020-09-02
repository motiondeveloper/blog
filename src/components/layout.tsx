import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import PageHeader from './header';
import { colors, padding, text } from '../theme';
import Footer from './footer';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.navy};
    font-family: ${text.bodyFont};
    color: ${colors.white};
    margin: 0;
  }

  a {
    text-decoration: underline;
    color: ${colors.blue};
  }

  a:hover {
    background-color: ${colors.blue + 22};
  }
  :focus {
    box-shadow: 0 0 0 2px ${colors.tan};
    outline: none;
  }
`;

const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;

  padding-left: ${padding.large};
  padding-right: ${padding.large};

  p {
    line-height: 150%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyles />
      <PageHeader />
      <Page>
        <main>{children}</main>
      </Page>
      <Footer />
    </>
  );
};

export default Layout;
