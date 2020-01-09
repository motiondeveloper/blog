import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostItem from '../components/postItem';
import PageHeading from '../components/pageHeading';

import { colors, padding, text } from '../theme';

const SectionHeading = styled.h2`
  color: ${colors.white};
  font-size: ${text.sizes.base};
  font-weight: ${text.weights.bold};
  &&& {
    margin-top: ${padding.xxlarge};
    margin-bottom: ${padding.large};
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const pinnedPosts = posts.filter(({ node }) => node.frontmatter.pinned);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <PageHeading>
          Articles on After Effects, JavaScript, and everything in between.
        </PageHeading>
        <SectionHeading>Featured posts</SectionHeading>
        {pinnedPosts.map(({ node }) => {
          return <PostItem post={node} key={node.fields.slug} />;
        })}
        <SectionHeading>All posts</SectionHeading>
        {posts.map(({ node }) => {
          return <PostItem post={node} key={node.fields.slug} />;
        })}
      </Layout>
    );
  }
}

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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`;
