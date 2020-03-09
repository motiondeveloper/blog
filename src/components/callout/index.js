import React from 'react';

import { Info, AlertTriangle, BookOpen } from 'react-feather';
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

const RelatedContent = ({ children }) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutTitle color={colors.green}>
        <h2>Continue reading</h2>
      </CalloutTitle>
      <CalloutIcon>
        <BookOpen size={padding.large} color={colors.green} />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

export { Note, Inform, Warn, RelatedContent };
