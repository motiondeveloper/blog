import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const LocalVideo = ({ videoName, title }) => {
  // Query for all Mp4 and WebM files with graphQL
  const data = useStaticQuery(graphql`
    query VideoFiles {
      mp4: allFile(filter: {extension: {eq: "mp4"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      webm: allFile(filter: {extension: {eq: "webm"}}) {
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
  const isCorrectVideo = edge => edge.node.name === videoName;
  const mp4 = data.mp4.edges.find(isCorrectVideo);
  const webm = data.webm.edges.find(isCorrectVideo);

  // If they exist, return the video element
  return mp4 && webm ? (
    <StyledVideo controls title={title}>
      <source src={webm.node.publicURL} type="video/webm" />
      <source src={mp4.node.publicURL} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </StyledVideo>
  ) : (
    <>
      {// If no matching video was found, return an empty
      // element and log a meaningful error
      console.error(`Could not find video of name "${videoName}"`)}
    </>
  );
};

export default LocalVideo;
