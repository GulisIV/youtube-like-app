import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageHeader from "../../common/PageHeader/PageHeader";
import VideosPanel from "../../common/VideosPanel/VideosPanel";
import { videosRecommendationsByRegionSelector } from "../../../redux/selectors/videos/recommendationsByRegionSelector";
import { loadRecommendedVideosByRegionStart } from "../../../redux/actions/videos/videoRecommendationsByRegion";

// const getPositionSuccess = pos => {
//   const crd = pos.coords;
// }
// navigator.geolocation.getCurrentPosition(success);
// Intl.DateTimeFormat().resolvedOptions().timeZone;

const userRegionCode = "PL";

const HomePage = () => {
  const dispatch = useDispatch();

  const videoRecommendations = useSelector(
    videosRecommendationsByRegionSelector
  );

  useEffect(() => {
    dispatch(loadRecommendedVideosByRegionStart(userRegionCode));
  }, [dispatch]);

  return (
    <>
      <PageHeader />
      <VideosPanel videos={videoRecommendations} />
    </>
  );
};

export default HomePage;
