import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import PageHeading from '../components/pageHeading';
import PostContent from '../components/postContent';
import FeaturedPosts from '../components/featuredPosts';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="404: Not Found" />
        <PageHeading>Page not found!</PageHeading>
        <PostContent>The page you're looking for doesn't exist.</PostContent>
        <FeaturedPosts />
      </Layout>
    );
  }
}

export default NotFoundPage;
