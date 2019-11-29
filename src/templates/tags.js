import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostItem from '../components/postItem';
import PageHeading from '../components/pageHeading';
import { padding } from '../theme';
import styled from 'styled-components';

const TagHeading = styled(PageHeading)`
  &&& {
    margin-bottom: ${padding.xlarge};
  }
`;

class TagPosts extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={`Posts tagged with ${tag}`} />
        <TagHeading>
          {tagHeader}
        </TagHeading>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          return <PostItem post={node} isPinned={false} key={slug} />;
        })}
      </Layout>
    );
  }
}

export default TagPosts;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            difficulty
            tags
            description
          }
        }
      }
    }
  }
`;
