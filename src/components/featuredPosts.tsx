import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import PostItem from './postItem';
import { Copy, HeadingSmall } from './type';

const FeaturedPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query PostQuery {
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
  `);
  return (
    <section>
      <h2>
        <HeadingSmall>Featured Blog Posts</HeadingSmall>
      </h2>
      {allMdx.edges.map(({ node }) => {
        return <PostItem post={node} key={node.fields.slug} />;
      })}
      <Copy>
        <Link to="/blog">View all posts</Link>
      </Copy>
    </section>
  );
};

export default FeaturedPosts;
