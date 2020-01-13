import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostItem from '../components/postItem';
import SEO from '../components/seo';
import PageHeading from '../components/pageHeading';
import { Copy, HeadingSmall, HeadingLarge } from '../components/type';
import Newsletter from '../components/newsletterSignup';
import Tools from '../components/tools';

import { padding } from '../theme';
import { HorizontalStack, StackItem } from '../components/stack';
import LinkButton from '../components/linkButton';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <PageHeading>
        We're bridging the gap between animator and developer.
      </PageHeading>
      <Newsletter mt={padding.large} />
      <HorizontalStack mt={padding.xxlarge}>
        <StackItem>
          <h2>
            <HeadingLarge>For Artists</HeadingLarge>
          </h2>
          <Copy>
            Master expressions, build templates, and improve your workflow by
            applying a developer mindset to motion design.
          </Copy>
          <LinkButton isLocal={true} type="primary" to="/blog">
            Read the blog
          </LinkButton>
        </StackItem>
        <StackItem>
          <h2>
            <HeadingLarge>For Brands</HeadingLarge>
          </h2>
          <Copy>
            We’ll free up your team by turning your most used graphics into
            templates your editors will love.
          </Copy>
          <LinkButton isLocal={true} type="primary" to="/contact">
            Contact us
          </LinkButton>
        </StackItem>
      </HorizontalStack>
      <Tools />
      <h2>
        <HeadingSmall>Featured Blog Posts</HeadingSmall>
      </h2>
      {posts.map(({ node }) => {
        return <PostItem post={node} key={node.fields.slug} />;
      })}
      <Copy>
        <Link to="/blog">View all posts</Link>
      </Copy>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { pinned: { eq: true } } }
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
  }
`;
