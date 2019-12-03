import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostItem from '../components/postItem';
import PageHeading from '../components/pageHeading';

import { colors, padding, text } from '../theme';
import HorizontalList from '../components/horizontalList';

const HeadingSmall = styled.h3`
  color: ${colors.white};
  font-size: ${text.sizes.base};
  font-weight: ${text.weights.bold};
  &&& {
    margin-top: ${padding.xxlarge};
    margin-bottom: ${padding.large};
  }
`;

const HorizontalStack = styled(HorizontalList)`
  margin-top: ${padding.xlarge};
  justify-content: space-between;
  li {
    margin-bottom: ${padding.large};
  }
  li :not(:last-child) {
      margin-right: ${padding.medium};
    }
`

const StackItem = styled.li`
  width: 48%;
  min-width: 300px;
`

const HeadingLarge = styled.h2`
  font-size: ${text.sizes.headingSmall};
  color: ${colors.yellow};
  &&& {
    margin-top: 0;
    margin-bottom: ${padding.small};
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Motion Developer" />
        <PageHeading>Bridging the gap between animator and developer</PageHeading>
        <HorizontalStack>
        <StackItem>
          <HeadingLarge>For Artists</HeadingLarge>
          <p>Master expressions, build templates, and improve your workflow by applying a developer mindset to motion design.</p>
          <Link to="/blog">Read the blog</Link>
        </StackItem>
        <StackItem>
          <HeadingLarge>For Brands</HeadingLarge>
          <p>We’ll free up your team by turning your most used graphics into templates your editors will love.</p>
          <Link to="/contact">Learn more</Link><br/>
          <Link to="/contact">Contact us</Link>
        </StackItem>
        </HorizontalStack>
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
      }
    }
  }
`;
