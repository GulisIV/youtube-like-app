import * as actionTypes from "../actionTypes";

export const loadRecommendedVideosByRegionStart = (payload) => {
  return {
    type: actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_START,
    payload,
  };
};

export const loadRecommendedVideosByRegionFinish = (payload) => {
  return {
    type: actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_FINISH,
    payload,
  };
};

export const loadRecommendedVideosByRegionError = (payload) => {
  return {
    type: actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_ERROR,
    payload,
  };
};
