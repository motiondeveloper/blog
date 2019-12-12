import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { padding, colors, text } from '../theme';

const Hidden = styled.p`
  display: none;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
`;

const FlexInput = styled.div`
  display: flex;
  align-items: stretch;
`;

const Button = styled.button`
  font-size: ${text.sizes.base};
  padding: ${padding.xsmall} ${padding.small};
  border-radius: 0 ${padding.xsmall} ${padding.xsmall} 0;
  border: 2px solid ${colors.blue};
  color: ${colors.blue};
  background: ${colors.black};

  :hover {
    color: ${colors.navy} !important;
    background: ${colors.blue};
  }
`;

const Label = styled.label`
  display: block;
  margin-top: ${padding.xlarge};
  margin-bottom: ${padding.small};
`;

const Input = styled.input`
  flex-grow: 1;
  width: 340px;
  font-size: ${text.sizes.base};
  padding: ${padding.small};
  border-radius: ${padding.xsmall} 0 0 ${padding.xsmall};
  background: ${colors.black};
  color: ${colors.white};
  border: none;
`;

const Newsletter = () => {
  return (
    <Form name="newsletter" method="POST" data-netlify="true">
      <Hidden>
        <input type="hidden" name="form-name" value="newsletter" />
        <label>
          Don’t fill this out if you're human:{' '}
          <input name="bot-field" type="hidden" />
        </label>
      </Hidden>
      <Label for="email">Join the newsletter:</Label>
      <FlexInput>
        <Input
          type="email"
          name="name"
          placeholder="Email Address"
          id="email"
          required
        />
        <Button type="submit">Subscribe</Button>
      </FlexInput>
    </Form>
  );
};

export default Newsletter;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
