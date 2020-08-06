import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';
import { colors } from '../theme';

const StyledCode = styled.div`
  margin: 0 !important;
  box-shadow: 0 0 0 2pt ${colors.navy};
`;

export const CodeJS = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });
  return (
    <StyledCode className="gatsby-highlight" data-language="javascript">
      <pre className="language-javascript">
        <code className="language-javascript">{children}</code>
      </pre>
    </StyledCode>
  );
};
