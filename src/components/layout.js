import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import PageHeader from 'components/header';
import { colors, padding, text } from '../theme';
import Footer from './footer';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.navy};
    font-family: ${text.bodyFont};
    color: ${colors.white};
    margin: 0;
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

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyles />
      <PageHeader title={title} />
      <Page>
        <main>{children}</main>
      </Page>
      <Footer />
    </>
  );
};

export default Layout;
