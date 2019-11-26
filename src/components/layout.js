import React from 'react';
import { Link } from 'gatsby';
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
  padding: ${padding.large};

  a {
    color: ${colors.blue};
  }

  a:hover {
    text-decoration: none;
  }

  p {
    line-height: 150%;
  }

  h1, h2, h3, h4, h5, h6: {
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
  font-weight: ${text.weights.bold};
  margin-bottom: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`;

const PageHeader = ({ title }) => {
  return (
    <Header>
      <p>
        <HeaderLink to={`/`}>{title}</HeaderLink>
      </p>
      <p>
        <HeaderLink to={`/blog`}>Blog</HeaderLink>
      </p>
    </Header>
  );
};

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyles />
      <Page>
        <header>
          <PageHeader title={title} />
        </header>
        <main>{children}</main>
      </Page>
    </>
  );
};

export default Layout;
