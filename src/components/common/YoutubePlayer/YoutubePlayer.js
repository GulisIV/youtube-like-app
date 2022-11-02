import React from "react";
import styled from "styled-components";

const YoutubePlayer = ({ videoId }) => {
  //TO DO: Resize Iframe height
  return (
    <VideoContainer>
      <iframe
        id="Player"
        width="100%"
        height="480px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube player"
      />
    </VideoContainer>
  );
};

export default YoutubePlayer;

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
