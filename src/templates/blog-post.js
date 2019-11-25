import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TagsList from '../components/tagsList';
import { rhythm } from '../utils/typography';
import { colors } from '../theme';
import { Calendar, Thermometer } from 'react-feather';

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
          <hr
            style={{
              marginTop: '1rem',
              marginBottom: rhythm(1),
              borderTop: `2px solid ${colors.black}`,
            }}
          />
          <h1
            style={{
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.title}
          </h1>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              listStyle: `none`,
              padding: 0,
              marginBottom: 0,
              marginLeft: 0,
              color: colors.grey,
            }}
          >
            <li
              style={{
                marginBottom: 0,
                marginLeft: 0,
                marginRight: rhythm(0.5),
              }}
            >
              <Calendar size="14" color={colors.grey} /> {post.frontmatter.date}
            </li>
            <li style={{ marginRight: rhythm(0.5), marginBottom: 0 }}>
              <Thermometer size="14" color={colors.grey} />{' '}
              {post.frontmatter.difficulty}
            </li>
            <li>
              <TagsList
                style={{
                  color: colors.grey,
                }}
                tags={post.frontmatter.tags}
              />
            </li>
          </ul>
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1.5),
              borderTop: `2px solid ${colors.black}`,
            }}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="post-content"
        />
        <TagsList
          style={{ marginBottom: rhythm(1) }}
          tags={post.frontmatter.tags}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginBottom: rhythm(0.5),
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <hr
          style={{
            marginTop: rhythm(0.5),
            marginBottom: rhythm(1),
          }}
        />
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
