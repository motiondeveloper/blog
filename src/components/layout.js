import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components"

import { colors, padding, text } from '../theme';

const Page = styled.div`
  background-color: ${colors.navy};
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
  padding-top: ${padding.large};
  font-family: ${text.bodyFont};

  p:a {
    color: ${colors.blue};
  }
  
  h1, h2, h3, h4, h5, h6: {
    margin-top: 0;
    margin-bottom: 0; 
    font-family: ${text.bodyFont};
  },
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: ${colors.white};
  font-size: ${text.sizes.headingSmall};
  font-weight: ${text.weights.bold};
  margin-bottom: 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`


const PageHeader = ({title}) => {
  return (
    <Header>
        <p>
          <HeaderLink
            to={`/`}
          >
            {title}
          </HeaderLink>
        </p>
        <p>
          <HeaderLink
            to={`/blog`}
          >
            Blog
          </HeaderLink>
        </p>
      </Header>
  )
}
 
const Layout = ({title, children }) => {
  return (
    <Page>
      <header>
        <PageHeader title={title} />
      </header>
      <main>{children}</main>
    </Page>
  );
};

export default Layout;
