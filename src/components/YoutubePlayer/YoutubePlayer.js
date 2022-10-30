import React from "react";
import styled from "styled-components";

const YoutubePlayer = ({ videoId }) => {
  return (
    <VideoContainer>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoContainer>
  );
};

export default YoutubePlayer;

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
