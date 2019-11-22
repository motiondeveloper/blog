import React from 'react';
import Emoji from '../components/emoji';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { colors } from '../theme';
import { Calendar, Thermometer } from 'react-feather';
import TagsList from '../components/tagsList';

const PostItem = ({ post, isPinned }) => {
  const title = post.frontmatter.title || post.fields.slug;
  const prefixWithPin = content => {
    return (
      <>
        <Emoji name="Pin" emoji="📌" /> {content}
      </>
    );
  };
  return (
    <div key={post.fields.slug}>
      <h3
        style={{
          marginBottom: 0,
        }}
      >
        <Link style={{ boxShadow: `none` }} to={`/blog/${post.fields.slug}`}>
          {isPinned ? prefixWithPin(title) : title}
        </Link>
      </h3>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `start`,
          listStyle: `none`,
          padding: 0,
          margin: 0,
          marginTop: rhythm(0.5),
          color: colors.grey,
        }}
      >
        <li style={{ marginRight: rhythm(0.5), marginBottom: 0 }}>
          <Calendar size="14" color={colors.grey} /> {post.frontmatter.date}
        </li>
        <li style={{ marginRight: rhythm(0.5), marginBottom: 0 }}>
          <Thermometer size="14" color={colors.grey} />{' '}
          {post.frontmatter.difficulty}
        </li>
        <li style={{ marginTop: 0 }}>
          <TagsList tags={post.frontmatter.tags} />
        </li>
      </ul>
      <p
        style={{
          marginTop: rhythm(1 / 4),
        }}
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description || post.excerpt,
        }}
      />
    </div>
  );
};

export default PostItem;
