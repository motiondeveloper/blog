import React from 'react';
import { Link } from 'gatsby';
import { colors, padding } from '../theme';
import { Calendar, Thermometer } from 'react-feather';
import TagsList from '../components/tagsList';
import HorizontalList from '../components/horizontalList';
import styled from 'styled-components';

const PostCard = styled.div`
  background-color: ${colors.black},
  border-radius: ${padding.xsmall},
  padding: ${padding.large},
  marginBottom: ${padding.large},
`;

const PostTitle = styled.h3`
  margin-bottom: 0;
  color: ${colors.yellow};
`;

const PostDesc = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${colors.white};
`;

const PostInfo = styled(HorizontalList)`
  color: ${colors.grey} li {
    margin-bottom: 0;
    margin-top: 0;
  }

  li:not(:last-child) {
    margin-right: ${padding.large};
  }
`;

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <Link to={`/blog/${post.fields.slug}`}>
      <PostCard key={post.fields.slug}>
        <PostTitle>{title}</PostTitle>
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
      </PostCard>
    </Link>
  );
};

export default PostItem;
