import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { colors } from '../theme';

const TagsList = ({ tags }) => {
  return (
    tags.map(tag =>
        <Link
            style={{
                marginLeft: rhythm(1/4)
            }}
            to={`/tags/${tag}`}
        >
            #{tag}
        </Link>
    )
  );
};

export default TagsList;
