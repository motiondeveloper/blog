import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const TagsList = ({ tags }) => {
  return tags.map(tag => (
    <Link
      style={{
        marginRight: rhythm(1 / 4),
      }}
      to={`/tags/${tag}`}
    >
      #{tag}
    </Link>
  ));
};

export default TagsList;
