import React from 'react';

import { Info, AlertTriangle, BookOpen, List } from 'react-feather';

import { colors, padding } from '../../theme';
import {
  CalloutWrapper,
  CalloutContent,
  CalloutIcon,
  CalloutTitle,
} from './styles';

const Note = ({ children }) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const Inform = ({ children }) => {
  return (
    <CalloutWrapper color={colors.blue}>
      <CalloutIcon>
        <Info size={padding.large} color={colors.blue} />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const Warn = ({ children }) => {
  return (
    <CalloutWrapper color={colors.tan}>
      <CalloutIcon>
        <AlertTriangle size={padding.large} color={colors.tan} />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const RelatedContent = ({ children, title = 'Continue reading' }) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutTitle color={colors.green}>
        <BookOpen size={padding.large} color={colors.green} />
        <h2>{title}</h2>
      </CalloutTitle>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const ContentList = ({ children, title = 'Contents' }) => {
  return (
    <CalloutWrapper
      color={colors.black}
      css={`
        margin-top: ${padding.xlarge};
      `}
    >
      <CalloutTitle color={colors.yellow}>
        <List size={padding.large} color={colors.yellow} />
        <h2>{title}</h2>
      </CalloutTitle>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

export { Note, Inform, Warn, ContentList, RelatedContent };
