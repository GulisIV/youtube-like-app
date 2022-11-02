import React from "react";
import styled from "styled-components";
import VideoTile from "../VideoTile/VideoTile";

const VideosPanel = ({ isColumnOrientation = false, videos }) => {
  const videoTiles = videos.map((video) => {
    return <VideoTile videoId={video.id} snippet={video.snippet} />;
  });

  return (
    <VideosContainer>
      <VideosSection isColumn={isColumnOrientation}>{videoTiles}</VideosSection>
    </VideosContainer>
  );
};

export default VideosPanel;

const VideosContainer = styled.div`
  background-color: #f9f9f9;
`;

const VideosSection = styled.div`
  ${(props) => (props.isColumn ? "display: column" : "display: grid")};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem 1rem;
  ${(props) => props.isColumn ? "padding-bottom: 3rem" : "padding: 3rem 0;"};
  ${(props) => props.isColumn && "margin: 0 1.5rem;"};
  border-top: 4px solid #ccc;
  &:first-child {
    border-top: none;
  }
`;
