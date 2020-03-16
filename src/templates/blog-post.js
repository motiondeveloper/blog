import React from 'react';
import { Link, graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Calendar, Thermometer } from 'react-feather';
import styled from 'styled-components';

import { colors, padding } from '../theme';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TagsList from '../components/tagsList';
import PostContent from '../components/postContent';
import PageHeading from '../components/pageHeading';
import HorizontalList from '../components/horizontalList';
import { RelatedContent } from '../components/callout';
import EditLink from '../components/editLink';

const PostInfo = styled(HorizontalList)`
  margin-top: ${padding.large};
  margin-bottom: ${padding.xlarge};
  li {
    color: ${colors.grey};
    margin-bottom: ${padding.xxsmall};
    margin-top: 0;
  }

  li:not(:last-child) {
    margin-right: ${padding.small};
  }
`;

const PageLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  * {
    margin: 0;
    padding: 0;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { title: siteTitle } = this.props.data.site.siteMetadata;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div>
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
        <PostContent>
          <MDXRenderer>{post.body}</MDXRenderer>
        </PostContent>
        <RelatedContent>
          <PageLinks>
            {next && (
              <li>
                Next article: {` `}
                <Link to={`/blog/${next.fields.slug}`} rel="next">
                  {next.frontmatter.title}
                </Link>
              </li>
            )}
            {previous && (
              <li
                css={`
                  margin-top: ${padding.small};
                `}
              >
                Previous article: {` `}
                <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                  {previous.frontmatter.title}
                </Link>
              </li>
            )}
            <li
              css={`
                display: flex;
                margin-top: ${padding.medium};
              `}
            >
              <p
                css={`
                  padding-right: ${padding.xsmall};
                `}
              >
                Tags: {` `}
              </p>
              <TagsList tags={post.frontmatter.tags} />
            </li>
          </PageLinks>
        </RelatedContent>
        <EditLink page={post} />
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
        repoUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        difficulty
        tags
      }
      ...EditLinkMdx
    }
  }
`;
