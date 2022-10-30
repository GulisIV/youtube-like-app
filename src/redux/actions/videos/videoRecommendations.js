import * as actionTypes from "../actionTypes";

export const loadRecommendedVideosStart = (payload) => {
  return {
    type: actionTypes.LOAD_RECOMMENDED_VIDEOS_START,
    payload,
  };
};

export const loadRecommendedVideosFinish = (payload) => {
  return {
    type: actionTypes.LOAD_RECOMMENDED_VIDEOS_FINISH,
    payload,
  };
};

export const loadRecommendedVideosError = (payload) => {
  return {
    type: actionTypes.LOAD_RECOMMENDED_VIDEOS_ERROR,
    payload,
  };
};
