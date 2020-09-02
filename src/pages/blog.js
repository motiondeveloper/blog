import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/pageHeading';
import SearchPosts from '../components/searchPosts';

import { padding } from '../theme';

const BlogIndex = ({ data, navigate, location }) => {
  const posts = data.allMdx.edges;
  const localSearchBlog = data.localSearchBlog;
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Articles on Adobe After Effects Expressions, JavaScript, Motion Graphics Templates, and everything in between."
      />
      <PageHeading>
        Articles on After Effects, JavaScript, and everything in between.
      </PageHeading>
      <div
        css={`
          margin-top: ${padding.large};
        `}
      >
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            pinned
            difficulty
            description
            tags
          }
        }
      }
    }
    localSearchBlog {
      index
      store
    }
  }
`;
