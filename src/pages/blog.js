import React from 'react';
import { graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostItem from '../components/postItem';

import { colors } from '../theme';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const pinnedPosts = posts.filter(({ node }) => node.frontmatter.pinned);
    const { social } = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <hr
          style={{
            marginTop: '1rem',
            borderTop: `2px solid ${colors.black}`,
          }}
        />
        <h1
          style={{
            color: colors.green,
          }}
        >
          Articles on After Effects, JavaScript, and everything in between.
        </h1>
        <p>
          Connect with us on{' '}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
          {` `}and{` `}
          <a href={`https://github.com/${social.github}`}>Github.</a>
        </p>
        <hr
          style={{
            marginBottom: '3rem',
            borderTop: `2px solid ${colors.black}`,
          }}
        />
        <h2
          style={{
            color: colors.white,
            fontSize: '1rem',
            marginBottom: rhythm(1.5),
          }}
        >
          Featured posts
        </h2>
        {pinnedPosts.map(({ node }) => {
          return <PostItem post={node} key={node.fields.slug} />;
        })}
        <h2
          style={{
            color: colors.white,
            fontSize: '1rem',
            marginTop: rhythm(2),
            marginBottom: rhythm(1.5),
          }}
        >
          All posts
        </h2>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
