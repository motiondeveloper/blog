import React from 'react';
import { Link } from 'gatsby';
import HorizontalList from './horizontalList';
import styled from 'styled-components';
import { padding, colors } from '../theme';

const tagColor = colors.green;

const Tag = styled.li`
  background-color: ${tagColor + `10`};
  border-radius: ${padding.xxsmall};
  padding: ${padding.xxsmall};
  padding-top: 0;
  padding-bottom: 0;
  margin: -${padding.xxsmall};
  :hover {
    background-color: ${tagColor + `30`};
  }
  a {
    color: ${tagColor};
    text-decoration: none;
  }
  a :hover {
    text-decoration: underline;
  }
  &&& {
    :not(:last-child) {
      margin-right: ${padding.xsmall};
    }
  }
`;

const TagsList = ({ tags }) => {
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
