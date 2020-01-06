import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { padding, colors, text } from '../theme';

const Hidden = styled.p`
  display: none;
`;

const Form = styled.form`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
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

const StyledLabel = styled.label`
  display: block;
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

const Newsletter = ({ mb, mt }) => {
  return (
    <Form
      name="newsletter"
      method="POST"
      data-netlify="true"
      mt={mt || '0px'}
      mb={mb || '0px'}
    >
      <Hidden>
        <input type="hidden" name="form-name" value="newsletter" />
        <label>
          Don’t fill this out if you're human:{' '}
          <input name="bot-field" type="hidden" />
        </label>
      </Hidden>
      <StyledLabel htmlFor="email">Join the newsletter:</StyledLabel>
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