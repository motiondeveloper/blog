import React from 'react';
import { graphql } from 'gatsby';

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
    const { author, social } = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <hr />
        <h1 style={{
          color: colors.yellow
        }}>Articles on Adobe After Effects, JavaScript, templates, and everything in between.</h1>
        <p>
          Connect with us on{' '}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
          {` `}and{` `}
          <a href={`https://github.com/${social.github}`}>Github.</a>
      </p>
        <hr />
        {pinnedPosts.map(({ node }) => {
          return <PostItem post={node} isPinned={true} key={node.fields.slug} />;
        })}
        <hr />
        {posts.map(({ node }) => {
          return <PostItem post={node} isPinned={false} key={node.fields.slug} />;
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
