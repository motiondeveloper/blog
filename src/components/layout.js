import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components"

import { rhythm } from '../utils/typography';

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 700;
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
 
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const pageIsRoot = (location.pathname === rootPath);
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <PageHeader title={title} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
