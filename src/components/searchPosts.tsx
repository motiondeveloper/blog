import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useFlexSearch } from 'react-use-flexsearch';
import * as queryString from 'query-string';
import { padding, colors, text } from '../theme';
import PostItem from './postItem';
import { Copy } from './type';
import { Search } from 'react-feather';

const SearchBar = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  width: 100%;
  height: 3rem;
  background: ${colors.black};
  margin-bottom: ${padding.xlarge};
`;

const SectionHeading = styled.h2`
  color: ${colors.white};
  font-size: ${text.sizes.bodyLarge};
  font-weight: ${text.weights.bold};
  &&& {
    margin-bottom: ${padding.large};
  }
`;

const Input = styled.input`
  font-family: ${text.bodyFont};
  width: 0;
  flex-grow: 1;
  font-size: ${text.sizes.body};
  padding: ${padding.small};
  border-radius: ${padding.xsmall} 0 0 ${padding.xsmall};
  color: ${colors.white};
  border: none;
  background: none;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${padding.small};
`;

const SearchedPosts = ({ results }) => {
  return results.length > 0 ? (
    <div>
      {results.map(post => (
        <PostItem post={post} key={post.fields.slug} />
      ))}
    </div>
  ) : (
    <Copy>Sorry, couldn't find any posts matching this search.</Copy>
  );
};
const AllPosts = ({ posts }) => {
  console.log('POSTS');
  console.log(posts);
  return (
    <div>
      {posts.map(post => (
        <PostItem post={post.node} key={post.node.fields.slug} />
      ))}
    </div>
  );
};

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search || '');

  console.log(localSearchBlog.store);
  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    localSearchBlog.store,
  );

  return (
    <>
      <Label htmlFor="search">Search all posts:</Label>
      <SearchBar>
        <Search
          color={colors.blue}
          name="Search"
          size="24px"
          css={`
            margin-left: ${padding.medium};
          `}
        />
        <Input
          id="search"
          type="search"
          placeholder="Search terms"
          value={query}
          onChange={e => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : '/blog/',
            );
            setQuery(e.target.value);
          }}
        />
      </SearchBar>
      <SectionHeading>{query ? 'Results' : 'All Posts'}</SectionHeading>
      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  );
};

export default SearchPosts;
