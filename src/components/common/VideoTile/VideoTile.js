import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as routes from "../../../utils/routes";
import VideoDetails from "../VideoDetails/VideosDetails";

const VideoTile = ({ videoId, snippet }) => {
  const videoTitle = snippet.title || "";
  const channelTitle = snippet.channelTitle || "";
  const videoThumbnail = snippet.thumbnails?.high.url;

  const videoDetails = {
    videoTitle: videoTitle,
    channelTitle: channelTitle,
  };

  const navigate = useNavigate();

  const handleThumbnailClick = () => {
    navigate(generatePath(routes.VIDEO, { videoId: videoId }), {
      state: videoDetails,
    });
  };

  return (
    <Tile id={videoId} key={videoId}>
      <VideoThumbnail onClick={handleThumbnailClick} data-duration="12:24">
        <VideoThumbnailImage src={videoThumbnail} alt="Video preview" />
      </VideoThumbnail>
      <VideoDetails videoTitle={videoTitle} channelTitle={channelTitle} />
    </Tile>
  );
};

export default VideoTile;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoThumbnail = styled.a`
  position: relative;
  display: flex;
  cursor: pointer;
  &:before {
    content: attr(data-duration);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    right: 5px;
    bottom: 5px;
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    font-size: 0.9rem;
  }
`;

const VideoThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  min-width: 250px;
  min-height: 150px;
  background-color: #aaa;
`;
