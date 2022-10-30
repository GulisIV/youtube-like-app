import React from "react";
import styled from "styled-components";
import ChannelImage from "../ChannelImage/ChannelImage";

const VideoTile = () => {
  return (
    <Tile>
      <a href="#" class="thumbnail" data-duration="12:24">
        <img
          class="thumbnail-image"
          src="https://picsum.photos/200"
        />
      </a>
      <VideoInfo>
        <ChannelImage />
        <Details>
          <Title href="#">Video Title</Title>
          <ChannelName href="#">Channel Name</ChannelName>
          <Metadata>
            <span>12K views</span>•<span>1 week ago</span>
          </Metadata>
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

const ChannelName = styled.a`
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
