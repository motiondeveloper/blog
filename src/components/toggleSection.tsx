import React from 'react';
import { colors, padding } from '../theme';
import styled, { css } from 'styled-components';

const Title = styled.h3``;

const ToggleSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <details
      css={css`
        summary::marker {
          color: ${colors.blue};
        }
        summary::-webkit-details-marker {
          color: ${colors.blue};
        }
      `}
    >
      <summary
        css={css`
          margin-bottom: ${padding.small};
        `}
      >
        <Title
          css={css`
            display: inline;
          `}
        >
          {title}
        </Title>
      </summary>
      {children}
    </details>
  );
};

export { ToggleSection };
