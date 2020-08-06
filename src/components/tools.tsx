import React from 'react';

import Card from './card';
import { Copy, HeadingSmall, HeadingLarge } from './type';
import { HorizontalStack, StackItem } from './stack';
import LinkButton from './linkButton';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { colors, padding } from '../theme';
import styled from 'styled-components';

const CodeOutline = styled.div`
  box-shadow: 0 0 0 4px ${colors.navy};
  border-radius: ${padding.small};
`;

const Tools = () => {
  const code = useStaticQuery(graphql`
    query code {
      eKeys: mdx(frontmatter: { title: { eq: "eKeys Code Example" } }) {
        body
      }
      eBox: mdx(frontmatter: { title: { eq: "eBox Code Example" } }) {
        body
      }
    }
  `);
  console.log(code);
  return (
    <section>
      <h2>
        <HeadingSmall>After Effects Tools</HeadingSmall>
      </h2>
      <Card>
        <HorizontalStack>
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
            <LinkButton
              isLocal={true}
              to="/blog/how-to-animate-with-expressions"
            >
              Read intro to eKeys
            </LinkButton>
          </StackItem>
          <StackItem>
            <CodeOutline>
              <MDXRenderer>{code.eKeys.body}</MDXRenderer>
            </CodeOutline>
          </StackItem>
        </HorizontalStack>
      </Card>
      <Card>
        <HorizontalStack>
          <StackItem>
            <h3>
              <HeadingLarge>eBox</HeadingLarge>
            </h3>
            <Copy>
              Easily create, position and scale rectangles from any anchor
              point.
            </Copy>
            <LinkButton
              isLocal={false}
              to="https://github.com/motiondeveloper/ebox"
            >
              Get eBox
            </LinkButton>
          </StackItem>
          <StackItem>
            <MDXRenderer>{code.eBox.body}</MDXRenderer>
          </StackItem>
        </HorizontalStack>
      </Card>
      <Copy>
        <a href="https://github.com/motiondeveloper">
          View all tools on Github
        </a>
      </Copy>
    </section>
  );
};

export default Tools;
