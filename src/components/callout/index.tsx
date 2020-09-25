import React from 'react';
import * as types from 'styled-components/cssprop';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Info,
  AlertTriangle,
  BookOpen,
  List,
  File,
  ArrowDownCircle,
  ChevronsRight,
} from 'react-feather';

import { FaQuoteLeft } from 'react-icons/fa';

import { colors, padding } from '../../theme';
import {
  CalloutWrapper,
  CalloutContent,
  CalloutIcon,
  CalloutTitle,
} from './styles';

const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutIcon>
        <ChevronsRight
          size={padding.large}
          color={colors.blue}
          name="Note Icon"
        />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const Inform = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalloutWrapper color={colors.blue}>
      <CalloutIcon>
        <Info size={padding.large} color={colors.blue} name="Info Icon" />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const Quote = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutIcon>
        <FaQuoteLeft
          size={padding.large}
          color={colors.tan}
          name="Quote Icon"
        />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const Warn = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalloutWrapper color={colors.tan}>
      <CalloutIcon>
        <AlertTriangle
          size={padding.large}
          color={colors.tan}
          name="Warning Icon"
        />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const RelatedContent = ({
  children,
  title = 'Continue reading',
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <CalloutWrapper color={colors.black}>
      <CalloutTitle color={colors.green}>
        <BookOpen size={padding.large} color={colors.green} name="Book Icon" />
        <h2>{title}</h2>
      </CalloutTitle>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const ContentList = ({
  children,
  title = 'Contents',
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <CalloutWrapper
      color={colors.black}
      css={`
        margin-top: ${padding.xlarge};
      `}
    >
      <CalloutTitle color={colors.yellow}>
        <List size={padding.large} color={colors.yellow} name="List Icon" />
        <h2>{title}</h2>
      </CalloutTitle>
      <CalloutContent>{children}</CalloutContent>
    </CalloutWrapper>
  );
};

const FileDownload = ({
  children,
  fileName,
  projectName,
  strong,
}: {
  children: React.ReactNode;
  fileName: string;
  projectName: string;
  strong?: boolean;
}) => {
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
        <File size={padding.large} color={colors.purple} />
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

export { Note, Inform, Quote, Warn, ContentList, RelatedContent, FileDownload };
