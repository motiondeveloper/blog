import React from 'react';
import { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Info,
  AlertTriangle,
  BookOpen,
  List,
  File,
  ArrowDownCircle,
} from 'react-feather';

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
        <Info size={padding.large} color={colors.blue} alt="Info Icon" />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const Warn = ({ children }) => {
  return (
    <CalloutWrapper color={colors.tan}>
      <CalloutIcon>
        <AlertTriangle
          size={padding.large}
          color={colors.tan}
          alt="Warning Icon"
        />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const RelatedContent = ({ children, title = 'Continue reading' }) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutTitle color={colors.green}>
        <BookOpen size={padding.large} color={colors.green} alt="Book Icon" />
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
        <List size={padding.large} color={colors.yellow} alt="List Icon" />
        <h2>{title}</h2>
      </CalloutTitle>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const FileDownload = ({ children, fileName, projectName, strong }) => {
  // Query for all zip files with graphQL
  const data = useStaticQuery(graphql`
    query zipFiles {
      allFile(filter: { extension: { eq: "zip" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  // Filter all videos to find the mp4 and webm that match
  // the name prop
  const isCorrectFile = edge => edge.node.name === fileName;
  console.log(data);
  const project = data.allFile.edges.find(isCorrectFile).node;
  return (
    <CalloutWrapper color={strong ? colors.purple : colors.black}>
      <CalloutIcon>
        <File size={padding.large} color={colors.purple} alt="File Icon" />
      </CalloutIcon>
      <CalloutContent>
        {children}
        <a
          href={project.publicURL}
          download
          css={css`
            color: ${colors.purple};
            :hover {
              background-color: ${colors.purple + 22};
            }
          `}
        >
          <ArrowDownCircle
            size="24px"
            color={colors.purple}
            css={css`
              position: relative;
              top: 8px;
              margin-right: ${padding.xsmall};
            `}
          />
          {projectName}
        </a>
      </CalloutContent>
    </CalloutWrapper>
  );
};

export { Note, Inform, Warn, ContentList, RelatedContent, FileDownload };
