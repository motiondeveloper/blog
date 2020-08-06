import React from 'react';
import styled from 'styled-components';

import { colors, padding } from '../theme';
import HorizontalList from './horizontalList';
import { List } from 'react-feather';

const ContentListWrapper = styled.div`
  position: relative;
  p {
    color: ${colors.white};
  }
  margin-top: ${padding.xlarge};
  margin-bottom: ${padding.large};
  margin-left: 0;
  margin-right: 0;
  border: 2.5px solid ${props => props.color};
  border-radius: ${padding.small};
  padding: ${padding.large} ${padding.large} ${padding.medium} ${padding.large};
`;

const ListContent = styled.div`
  margin: 0;
  p {
    margin: 0;
  }
  &&& ul {
    margin-bottom: 0;
  }
`;

const ListTitle = styled.div`
  position: absolute;
  top: -${padding.medium};
  box-shadow: 0 0 0 ${padding.small} ${colors.navy};
  background: ${colors.navy};
  &&& {
    margin: 0;
    ul {
      margin: 0;
    }
    h2 {
      transform: translate(0, -2.5px);
      margin: 0;
      margin-left: ${padding.small};
    }
  }
`;

const ContentList = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <ContentListWrapper color={colors.black}>
      <ListTitle>
        <HorizontalList>
          <List color={colors.yellow} />
          <h2>{title || 'Contents'}</h2>
        </HorizontalList>
      </ListTitle>
      <ListContent>{children}</ListContent>
    </ContentListWrapper>
  );
};

export default ContentList;
