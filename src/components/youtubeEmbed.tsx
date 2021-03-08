import React from 'react';
import styled from 'styled-components';

const Youtube = styled.iframe`
  padding-top: 16px;
  width: 100%;
  height: 360px;
`;

function YoutubeEmbed({ id }: { id: string }) {
  return (
    <Youtube
      src={`https://www.youtube-nocookie.com/embed/${id}?modestbranding=1`}
      frameBorder="0"
      allowFullScreen={true}
    />
  );
}

export default YoutubeEmbed;
