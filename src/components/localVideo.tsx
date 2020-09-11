import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md';
import { colors, padding } from '../theme';

const StyledVideo = styled.video`
  border-radius: ${padding.small};
  width: 100%;
  height: auto;
`;

const VideoWrapper = styled.div`
  position: relative;
  margin-bottom: ${padding.large};
  button .pause {
    opacity: 0;
  }
  :hover .pause {
    opacity: 100;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;

  .pause {
    transition: opacity 0.1s;
  }
`;

const LocalVideo = ({
  videoName,
  title,
}: {
  videoName: string;
  title: string;
}) => {
  // Query for all Mp4 and WebM files with graphQL
  const data = useStaticQuery(graphql`
    query VideoFiles {
      mp4: allFile(filter: { extension: { eq: "mp4" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      webm: allFile(filter: { extension: { eq: "webm" } }) {
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

  // State for video controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState<boolean>(true);

  // Play/pause the video element when the
  // state changes
  useEffect(() => {
    paused ? videoRef.current?.pause() : videoRef.current?.play();
  }, [paused]);

  // If they exist, return the video element
  return mp4 && webm ? (
    <VideoWrapper ref={wrapperRef} onClick={() => setPaused(!paused)}>
      <PlayButton
        onClick={() => setPaused(!paused)}
        aria-label={paused ? 'play video' : 'pause video'}
      >
        {paused ? (
          <MdPlayCircleFilled color={colors.white} size={padding.xlarge} />
        ) : (
          <MdPauseCircleFilled
            color={colors.white}
            size={padding.xlarge}
            className="pause"
          />
        )}
      </PlayButton>
      <StyledVideo title={title} ref={videoRef} loop muted>
        <source src={webm.node.publicURL} type="video/webm" />
        <source src={mp4.node.publicURL} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </StyledVideo>
    </VideoWrapper>
  ) : (
    <>
      {// If no matching video was found, return an empty
      // element and log a meaningful error
      console.error(`Could not find video of name "${videoName}"`)}
    </>
  );
};

export default LocalVideo;
