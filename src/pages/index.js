import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/pageHeading';
import { Copy, HeadingLarge } from '../components/type';
import Newsletter from '../components/newsletterSignup';
import Tools from '../components/tools';

import { padding } from '../theme';
import { HorizontalStack, StackItem } from '../components/stack';
import LinkButton from '../components/linkButton';
import FeaturedPosts from '../components/featuredPosts';

const BlogIndex = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <PageHeading>
        We're bridging the gap between animator and developer.
      </PageHeading>
      <div
        css={css`
          margin-top: ${padding.large};
        `}
      >
        <Newsletter dark />
      </div>
      <HorizontalStack
        css={css`
          margin-top: ${padding.xxlarge};
        `}
      >
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
      <FeaturedPosts />
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
  }
`;
