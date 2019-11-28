import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TagsList from '../components/tagsList';
import PostContent from '../components/postContent';
import Divider from '../components/divider';
import PageHeading from '../components/pageHeading';
import HorizontalList from '../components/horizontalList';
import { Calendar, Thermometer } from 'react-feather';
import styled from 'styled-components';
import { colors, padding } from '../theme';

const PostInfo = styled(HorizontalList)`
  margin-top: ${padding.small};
  margin-bottom: ${padding.small};
  li {
    color: ${colors.grey};
    margin-bottom: ${padding.xxsmall};
    margin-top: 0;
  }

  li:not(:last-child) {
    margin-right: ${padding.small};
  }
`;

const PageLinks = styled(HorizontalList)`
  justify-content: space-around;
  li {
    margin-bottom: ${padding.small};
  }
`;


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div>
          <Divider />
          <PageHeading>{post.frontmatter.title}</PageHeading>
          <PostInfo>
            <li>
              <Calendar size="14" color={colors.grey} /> {post.frontmatter.date}
            </li>
            <li>
              <Thermometer size="14" color={colors.grey} />{' '}
              {post.frontmatter.difficulty}
            </li>
            <li>
              <TagsList tags={post.frontmatter.tags} />
            </li>
          </PostInfo>
        </div>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <TagsList tags={post.frontmatter.tags} />
        <Divider />
        <PageLinks>
          <li>
            {previous && (
              <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PageLinks>
        <Divider />
        <Bio />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        difficulty
        tags
      }
    }
  }
`;
