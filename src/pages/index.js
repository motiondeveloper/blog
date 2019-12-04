import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/pageHeading';
import Card from '../components/card';

import { colors, padding, text } from '../theme';
import HorizontalList from '../components/horizontalList';

const HeadingSmall = styled.p`
  color: ${colors.white};
  font-size: ${text.sizes.base};
  font-weight: ${text.weights.bold};
  &&& {
    margin-top: ${padding.xxlarge};
    margin-bottom: ${padding.large};
  }
`;

const HeadingLarge = styled.p`
  font-size: ${text.sizes.headingSmall};
  font-weight: ${text.weights.bold};
  color: ${colors.yellow};
  &&& {
    margin-top: 0;
    margin-bottom: ${padding.small};
  }
`;

const HorizontalStack = styled(HorizontalList)`
  margin-top: ${padding.xlarge};
  justify-content: space-between;
  li :not(:last-child) {
      margin-right: ${padding.medium};
      margin-bottom: ${padding.xlarge};
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
  max-width: 380px;
  flex-grow: 1;
`

const eKeysCode = `const inKeys = [
  {
    keyTime: 1,
    keyValue: 0,
    easeOut: 66,
  },{
    keyTime: 2,
    keyValue: 250,
    easeIn: 90,
  }
];

eKeys.animate(inKeys, time);
`

const CodeJS = ({ children }) => {
  return (
    <div className="gatsby-highlight" data-language="javascript">
      <pre className="language-javascript">
        <code className="language-javascript">
          {children}
        </code>
      </pre>
    </div>
  );
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Motion Developer" />
      <PageHeading>Bridging the gap between animator and developer</PageHeading>
      <HorizontalStack>
        <StackItem>
          <h2><HeadingLarge>For Artists</HeadingLarge></h2>
          <Copy>Master expressions, build templates, and improve your workflow by applying a developer mindset to motion design.</Copy>
          <SecondaryButton to="/blog">Read the blog</SecondaryButton>
        </StackItem>
        <StackItem>
          <h2><HeadingLarge>For Brands</HeadingLarge></h2>
          <Copy>We’ll free up your team by turning your most used graphics into templates your editors will love.</Copy>
          <SecondaryButton to="/contact">Learn more</SecondaryButton>
          <PrimaryButton to="/contact" primary>Contact us</PrimaryButton>
        </StackItem>
      </HorizontalStack>
      <h2><HeadingSmall>After Effects Tools</HeadingSmall></h2>
      <Card>
        <HorizontalList>
          <StackItem>
            <h3><HeadingLarge>eKeys</HeadingLarge></h3>
            <Copy>
              Create keyframes within expressions - with full control over easing.
              eKeys gives you the control to create dynamic templates, with the smooth animation your used to with keyframes.
              </Copy>
            <SecondaryButton to="/blog/how-to-animate-with-expressions">Learn more</SecondaryButton>
          </StackItem>
          <StackItem>
            <CodeJS>
              {eKeysCode}
            </CodeJS>
          </StackItem>
        </HorizontalList>
      </Card>
    </Layout>
  );
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
