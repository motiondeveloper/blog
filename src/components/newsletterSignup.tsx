import React from 'react';
import styled, { css } from 'styled-components';

import { padding, colors, text } from '../theme';

const Hidden = styled.p`
  display: none;
`;

const Form = styled.form`
  width: 100%;
`;

const FlexInput = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const Button = styled.button`
  font-family: ${text.bodyFont};
  font-size: ${text.sizes.body};
  padding: ${padding.xsmall} ${padding.small};
  border-radius: 0 ${padding.xsmall} ${padding.xsmall} 0;
  border: 2px solid ${colors.blue};
  color: ${colors.blue};

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
  font-family: ${text.bodyFont};
  width: 0;
  flex-grow: 1;
  font-size: ${text.sizes.body};
  padding: ${padding.small};
  border-radius: ${padding.xsmall} 0 0 ${padding.xsmall};
  color: ${colors.white};
  border: none;
`;

const Newsletter = ({ dark, id }: { dark?: boolean; id: string }) => {
  return (
    <Form
      name="newsletter"
      method="POST"
      data-netlify="true"
      css={css`
        input {
          background-color: ${dark ? colors.black : colors.navy};
        }
        button {
          background-color: ${!dark ? colors.black : colors.navy};
        }
      `}
    >
      <Hidden>
        <input type="hidden" name="form-name" value="newsletter" />
        <label>
          Don’t fill this out if you're human:{' '}
          <input name="bot-field" type="hidden" />
        </label>
      </Hidden>
      <StyledLabel htmlFor={`email ${id}`}>Join the newsletter:</StyledLabel>
      <FlexInput>
        <Input
          type="email"
          name="email address"
          placeholder="Email Address"
          id={`email ${id}`}
          required
        />
        <Button type="submit">Subscribe</Button>
      </FlexInput>
    </Form>
  );
};

export default Newsletter;
