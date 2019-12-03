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

const Copy = styled.p`
  margin-bottom: ${padding.large};
`

const LinkButton = styled(Link)`
  margin-right: ${padding.small};
  text-decoration: none;
  padding: ${padding.xsmall} ${padding.small};
  border-radius: ${padding.xsmall};
  border: 2px solid ${colors.blue};
`

const SecondaryButton = styled(LinkButton)`
  :hover {
    color: ${colors.navy} !important;
    background: ${colors.blue};
  }
`

const PrimaryButton = styled(LinkButton)`
  color: ${colors.navy} !important;
  background: ${colors.blue};
  :hover {
    filter: brightness(110%);
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
            <Copy>Master expressions, build templates, and improve your workflow by applying a developer mindset to motion design.</Copy>
            <SecondaryButton to="/blog">Read the blog</SecondaryButton>
          </StackItem>
          <StackItem>
            <HeadingLarge>For Brands</HeadingLarge>
            <Copy>We’ll free up your team by turning your most used graphics into templates your editors will love.</Copy>
            <SecondaryButton to="/contact">Learn more</SecondaryButton>
            <PrimaryButton to="/contact" primary>Contact us</PrimaryButton>
          </StackItem>
        </HorizontalStack>
        <HeadingSmall>After Effects Tools</HeadingSmall>
        <div style={{width:'100%', height: '300px', backgroundColor: colors.black, borderRadius: padding.small}}></div>
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
