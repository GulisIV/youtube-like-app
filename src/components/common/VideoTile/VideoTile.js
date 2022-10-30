import React from "react";
import styled from "styled-components";
import ChannelImage from "../ChannelImage/ChannelImage";

const VideoTile = ({ videoId, snippet }) => {
  console.log("snippet", snippet);
  const videoTitle = snippet.title || "";
  const channelTitle = snippet.channelTitle || "";
  const videoThumbnail = snippet.thumbnails?.high.url;
  return (
    <Tile key={videoId}>
      <a href="#" data-duration="12:24">
        <VideoThumbnail src={videoThumbnail} alt="Video preview" />
      </a>
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
    </Tile>
  );
};

export default VideoTile;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  min-width: 250px;
  min-height: 150px;
  background-color: #aaa;
`;

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
