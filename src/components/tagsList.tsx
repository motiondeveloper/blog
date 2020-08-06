import React from 'react';
import { Link } from 'gatsby';
import HorizontalList from './horizontalList';
import styled from 'styled-components';
import { padding, colors } from '../theme';

const Tag = styled.li`
  &&& a {
    color: ${colors.green};
  }
  &&& a:hover {
    background-color: ${colors.green + 22};
  }
  :not(:last-child) {
    margin-right: ${padding.xsmall};
  }
`;

const TagsList = ({ tags }: { tags: string[] }) => {
  const tagLinks = tags.map(tag => (
    <Tag key={tag}>
      <Link key={tag} to={`/tags/${tag}`}>
        #{tag}
      </Link>
    </Tag>
  ));
  return <HorizontalList>{tagLinks}</HorizontalList>;
};

export default TagsList;
