import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../../common/PageHeader/PageHeader";
import VideoDetails from "../../common/VideoDetails/VideosDetails";
import YoutubePlayer from "../../common/YoutubePlayer/YoutubePlayer";
import VideosPanel from "../../common/VideosPanel/VideosPanel";
import { videoRelationsSelector } from "../../../redux/selectors/videos/videoRelationsSelector";
import { loadRelatedVideosStart } from "../../../redux/actions/videos/videoRelations";

const VideoViewPage = () => {
  const { videoId } = useParams();
  const { state } = useLocation();

  const dispatch = useDispatch();

  const relatedVideos = useSelector(videoRelationsSelector);

  useEffect(() => {
    dispatch(loadRelatedVideosStart(videoId));
  }, [videoId]);

  return (
    <>
      <PageHeader />
      <ContentWrapper>
        <VideoBlock>
          <YoutubePlayer videoId={videoId} />
          <VideoDetails
            videoTitle={state.videoTitle}
            channelTitle={state.channelTitle}
          />
        </VideoBlock>
        <StyledVideosPanel isColumnOrientation videos={relatedVideos} />
      </ContentWrapper>
    </>
  );
};

export default VideoViewPage;

const ContentWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const VideoBlock = styled.div`
  width: 80%;
`;

const StyledVideosPanel = styled(VideosPanel)`
  width: 15%;
`;
