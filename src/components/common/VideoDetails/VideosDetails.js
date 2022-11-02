import React from "react";
import styled from "styled-components";
import ChannelImage from "../ChannelImage/ChannelImage";

const VideoDetails = ({ videoTitle, channelTitle }) => {
  return (
      <VideoInfo>
        <ChannelImage />
        <Details>
          <Title href="#">{videoTitle}</Title>
          <ChannelTitle href="#">{channelTitle}</ChannelTitle>
          {/* TO DO: add additional API calls to get this data
          <Metadata>
            <span>12K views</span>•<span>1 week ago</span>
          </Metadata> 
          */}
        </Details>
      </VideoInfo>
  );
};

export default VideoDetails;

const VideoInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: black;
`;

const ChannelTitle = styled.a`
  margin-bottom: 0.1rem;
  text-decoration: none;
  transition: color 150ms;
  color: #555;
  &:hover {
    color: #111;
  }
`;

const Metadata = styled.div`
  color: #555;
`;
