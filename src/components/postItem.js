import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { colors } from '../theme';
import { Calendar, Thermometer } from 'react-feather';
import TagsList from '../components/tagsList';

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <Link to={`/blog/${post.fields.slug}`}>
      <div
        key={post.fields.slug}
        style={{
          backgroundColor: colors.black,
          borderRadius: '8px',
          padding: rhythm(1),
          marginBottom: rhythm(1),
        }}
      >
        <h3
          style={{
            marginBottom: 0,
            color: colors.yellow,
          }}
        >
          {title}
        </h3>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `start`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
            marginTop: rhythm(1 / 4),
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
            marginTop: 0,
            marginBottom: 0,
            color: colors.white,
          }}
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
        />
      </div>
    </Link>
  );
};

export default PostItem;
