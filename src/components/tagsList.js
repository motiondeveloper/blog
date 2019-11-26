import React from 'react';
import { Link } from 'gatsby';
import HorizontalList from './horizontalList';
import styled from 'styled-components';
import { padding } from '../theme';

const Tag = styled.li`
  li:not(:last-child) {
    margin-right: ${padding.small};
  }
`;

const TagsList = ({ tags }) => {
  const tagLinks = tags.map(tag => (
    <Tag>
      <Link key={tag} to={`/tags/${tag}`}>
        #{tag}
      </Link>
    </Tag>
  ));
  return <HorizontalList>{tagLinks}</HorizontalList>;
};

export default TagsList;
