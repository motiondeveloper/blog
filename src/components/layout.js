import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components"

import { colors, padding, text } from '../theme';
import { rhythm } from '../utils/typography';

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

const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
  padding-top: ${padding.large};
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
