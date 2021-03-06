import React from 'react';
import { Link } from 'gatsby';
import { colors, padding, text } from '../theme';
import { Calendar, Thermometer } from 'react-feather';
import TagsList from './tagsList';
import HorizontalList from './horizontalList';
import styled from 'styled-components';
import PostCard from './card';

const PostTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${text.sizes.headingSmall};
  &&& a {
    text-decoration: none;
    color: ${colors.yellow};
    :hover {
      text-decoration: underline;
      background: none;
    }
  }
`;

const PostDesc = styled.p`
  display: inline;
  color: ${colors.white};
`;

const PostInfo = styled(HorizontalList)`
  margin-top: ${padding.small};
  margin-bottom: ${padding.small};
  li {
    color: ${colors.grey};
    margin-bottom: ${padding.xxsmall};
    margin-top: 0;
  }

  li:not(:last-child) {
    margin-right: ${padding.small};
  }
`;

const ReadLink = styled(Link)`
  margin-left: ${padding.xsmall};
  &&& {
    white-space: nowrap;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <PostCard key={post.fields.slug}>
      <PostTitle>
        <Link to={`/blog${post.fields.slug}`}>{title}</Link>
      </PostTitle>

      <PostInfo>
        <li>
          <Calendar size="14" color={colors.grey} name="Calendar Icon" />{' '}
          {post.frontmatter.date}
        </li>
        <li>
          <Thermometer size="14" color={colors.grey} name="Thermometer Icon" />{' '}
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
      <ReadLink to={`/blog${post.fields.slug}`}>Read More →</ReadLink>
    </PostCard>
  );
};

export default PostItem;
