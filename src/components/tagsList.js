import React from 'react';
import { Link } from 'gatsby';
import HorizontalList from './horizontalList';
import styled from "styled-components";
import {padding} from '../theme';
 
const Tag = styled.li`
  li:not(:last-child) {
    margin-right: ${padding.large};
  }
`

const TagsList = ({ tags, style }) => {
  const tagLinks = tags.map((tag, index) => (
    <Tag>
    <Link
      key={tag}
      to={`/tags/${tag}`}
    >
      #{tag}
    </Link>
    </Tag>
  ));
  return <HorizontalList>{tagLinks}</HorizontalList>;
};

export default TagsList;
