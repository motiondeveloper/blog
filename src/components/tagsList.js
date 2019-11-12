import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const TagsList = ({ tags, style }) => {
  const tagLinks = tags.map((tag, index) => (
    <Link
      key={tag}
      style={ (index !== tags.length - 1) ? {
        marginRight: rhythm(1 / 4),
      } : {}}
      to={`/tags/${tag}`}
    >
      #{tag}
    </Link>
  ));
  return <div style={{...style}}>{tagLinks}</div>
};

export default TagsList;
