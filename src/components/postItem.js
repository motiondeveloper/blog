import React from 'react';
import { Link } from 'gatsby';
import { colors, padding, text } from '../theme';
import { Calendar, Thermometer } from 'react-feather';
import TagsList from '../components/tagsList';
import HorizontalList from '../components/horizontalList';
import styled from 'styled-components';

const PostCard = styled.div`
  background-color: ${colors.black};
  border-radius: ${padding.xsmall};
  padding: ${padding.large};
  margin-bottom: ${padding.large};
  text-decoration: none;
`;

const PostTitle = styled.h3`
  font-size: ${text.sizes.headingSmall};
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  color: ${colors.yellow};
`;

const PostDesc = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${colors.white};
`;

const PostInfo = styled(HorizontalList)`
  margin-top: ${padding.small};
  li {
    color: ${colors.grey};
    margin-bottom: 0;
    margin-top: 0;
  }

  li:not(:last-child) {
    margin-right: ${padding.small};
  }
`;

const ReadLink = styled(Link)`
  display: block;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <PostCard key={post.fields.slug}>
      <Link to={`/blog/${post.fields.slug}`}>
        <PostTitle>{title}</PostTitle>
      </Link>

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
      <PostDesc
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description || post.excerpt,
        }}
      />
      <ReadLink to={`/blog/${post.fields.slug}`}>Read More →</ReadLink>
    </PostCard>
  );
};

export default PostItem;
