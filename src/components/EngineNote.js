import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components';
import { XCircle } from 'react-feather';
import { colors, padding } from '../theme';
import useStickyState from '../hooks/useStickyState';

export const EngineNote = () => {
  const [isActive, setActive] = useStickyState(
    true,
    'expression-engine-dialog',
  );
  const hideAlert = () => setActive(false);
  console.log(isActive);
  return (
    isActive && (
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.white};
          background: ${colors.navy};
          padding: ${padding.medium};
          border-bottom: 2px solid ${colors.black};
          position: sticky;
          top: 0;
          z-index: 100;
        `}
      >
        <div>
          All expressions on Motion Developer will only work in the newer{` `}
          <Link to="/blog/javascript-engine">
            JavaScript Expressions Engine
          </Link>
        </div>
        <button
          css={css`
            background: none;
            border: none;
            margin: 0;
            padding: 0;
            height: 20px;
          `}
          onClick={hideAlert}
        >
          <XCircle
            css={css`
              margin-left: ${padding.medium};
            `}
            color={colors.blue}
          />
        </button>
      </div>
    )
  );
};
