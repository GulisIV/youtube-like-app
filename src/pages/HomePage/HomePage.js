import React from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader/PageHeader";
import VideoTile from "../../components/VideoTile/VideoTile";

const HomePage = () => {
  return (
    <>
      <PageHeader />
      <VideosContainer>
        <VideosSection>
          <VideoTile />
          <VideoTile />
          <VideoTile />
        </VideosSection>
      </VideosContainer>
    </>
  );
};

export default HomePage;

const VideosContainer = styled.div`
  background-color: #f9f9f9;
`;

const VideosSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem 1rem;
  padding: 3rem 0;
  margin: 0 1.5rem;
  border-top: 4px solid #ccc;
  &:first-child {
    border-top: none;
  }
`;
