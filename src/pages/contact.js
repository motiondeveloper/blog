import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { padding, colors, text } from '../theme';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/pageHeading';
import Card from '../components/card';
import { Copy } from '../components/type';

const Hidden = styled.p`
  display: none;
`;

const Form = styled.form`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 100%;
  font-size: ${text.sizes.base};
  margin-right: ${padding.small};
  margin-bottom: ${padding.large};
  padding: ${padding.xsmall} ${padding.small};
  border-radius: ${padding.xsmall};
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  background-color: ${colors.black};

  :hover {
    color: ${colors.navy} !important;
    background: ${colors.blue};
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: ${padding.small};
  margin-left: ${padding.small};
`;

const Input = styled.input`
  display: block;
  font-size: ${text.sizes.base};
  width: ${`calc(100% - ${padding.large})`};
  padding: ${padding.small};
  border: 2px solid ${colors.green};
  border-radius: ${padding.xsmall};
  background: ${colors.black};
  color: ${colors.white};
  :invalid {
    border-color: ${colors.yellow};
  }
`;

const Area = styled.textarea`
  font-family: ${text.bodyFont};
  resize: vertical;
  display: block;
  font-size: ${text.sizes.base};
  width: ${`calc(100% - ${padding.large})`};
  height: ${padding.xlarge};
  padding: ${padding.small};
  border: 2px solid ${colors.green};
  border-radius: ${padding.xsmall};
  background: ${colors.black};
  color: ${colors.white};
  :invalid {
    border-color: ${colors.yellow};
  }
`;

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <PageHeading>Get in touch</PageHeading>
      <Copy>
        Business enquiry, question about one of our products, or want to say
        hey?
      </Copy>
      <Copy>Fill out the form below and we'll get back to you.</Copy>
      <Card>
        <ContactForm />
      </Card>
    </Layout>
  );
};

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" data-netlify="true">
      <Hidden>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Don’t fill this out if you're human:{' '}
          <input name="bot-field" type="hidden" />
        </label>
      </Hidden>
      <Copy>
        <Label for="name">Your Name:</Label>
        <Input type="text" name="name" id="name" />
      </Copy>
      <Copy>
        <Label for="email">Your Email:</Label>
        <Input type="email" name="name" id="email" required />
      </Copy>
      <Copy>
        <Label for="message">Message:</Label>
        <Area name="message" id="message" required></Area>
      </Copy>

      <Button type="submit">Send</Button>
    </Form>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
