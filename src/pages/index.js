import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import PostItem from '../components/postItem';
import SEO from '../components/seo';
import PageHeading from '../components/pageHeading';
import Card from '../components/card';
import { Copy, HeadingSmall, HeadingLarge } from '../components/type';
import Newsletter from '../components/newsletterSignup';

import { colors, padding } from '../theme';
import HorizontalList from '../components/horizontalList';

const HorizontalStack = styled(HorizontalList)`
  margin-top: ${props => props.mt};
  justify-content: space-between;
`;

const StackItem = styled.li`
  width: 40%;
  min-width: 300px;
  flex-grow: 1;
  :not(:last-child) {
    margin-right: ${padding.large};
    margin-bottom: ${padding.xlarge};
  }
`;

const LinkButton = styled(Link)`
  margin-right: ${padding.small};
  text-decoration: none;
  padding: ${padding.xsmall} ${padding.small};
  border-radius: ${padding.xsmall};
  border: 2px solid ${colors.blue};
`;

const SecondaryButton = styled(LinkButton)`
  :hover {
    color: ${colors.navy} !important;
    background: ${colors.blue};
  }
`;

const PrimaryButton = styled(LinkButton)`
  border-color: ${colors.green};
  color: ${colors.green} !important;
  :hover {
    color: ${colors.navy} !important;
    background: ${colors.green};
  }
`;

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
`;

const eBoxCode = `const myBox =
  eBox.createBox({
    size: [200, 200],
    position: [0, 0],
    anchor: 'center',
  });

myBox.setScale(
  [scaleIn, 100], 
  'topLeft’
);

myBox.getPath();
`;

const CodeBlock = styled.div`
  margin-bottom: 0;
  box-shadow: 0 0 0 2pt ${colors.navy};
`;

const CodeJS = ({ children }) => {
  return (
    <CodeBlock className="gatsby-highlight" data-language="javascript">
      <pre className="language-javascript">
        <code className="language-javascript">{children}</code>
      </pre>
    </CodeBlock>
  );
};

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <PageHeading>
        We're bridging the gap between animator and developer.
      </PageHeading>
      <Newsletter mt={padding.large}/>
      <HorizontalStack mt={padding.xxlarge}>
        <StackItem>
          <h2>
            <HeadingLarge>For Artists</HeadingLarge>
          </h2>
          <Copy>
            Master expressions, build templates, and improve your workflow by
            applying a developer mindset to motion design.
          </Copy>
          <PrimaryButton to="/blog">Read the blog</PrimaryButton>
        </StackItem>
        <StackItem>
          <h2>
            <HeadingLarge>For Brands</HeadingLarge>
          </h2>
          <Copy>
            We’ll free up your team by turning your most used graphics into
            templates your editors will love.
          </Copy>
          <PrimaryButton to="/contact">Contact us</PrimaryButton>
        </StackItem>
      </HorizontalStack>
      <h2>
        <HeadingSmall>After Effects Tools</HeadingSmall>
      </h2>
      <Card>
        <HorizontalStack mt="0">
          <StackItem>
            <h3>
              <HeadingLarge>eKeys</HeadingLarge>
            </h3>
            <Copy>
              Create keyframes within expressions - with full control over
              easing.
            </Copy>
            <Copy>
              {' '}
              eKeys gives you the control you need to create dynamic templates,
              with the smooth animation your used to with keyframes.{' '}
            </Copy>
            <SecondaryButton to="/blog/how-to-animate-with-expressions">
              Read intro to eKeys
            </SecondaryButton>
          </StackItem>
          <StackItem>
            <CodeJS>{eKeysCode}</CodeJS>
          </StackItem>
        </HorizontalStack>
      </Card>
      <Card>
        <HorizontalStack mt="0">
          <StackItem>
            <h3>
              <HeadingLarge>eBox</HeadingLarge>
            </h3>
            <Copy>
              Easily create, position and scale rectangles from any anchor
              point.
            </Copy>
            <SecondaryButton to="/blog/making-better-boxes">
              Get eBox
            </SecondaryButton>
          </StackItem>
          <StackItem>
            <CodeJS>{eBoxCode}</CodeJS>
          </StackItem>
        </HorizontalStack>
      </Card>
      <Copy>
        <a href="https://github.com/motiondeveloper">
          View all tools on Github
        </a>
      </Copy>

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
    allMarkdownRemark(
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
