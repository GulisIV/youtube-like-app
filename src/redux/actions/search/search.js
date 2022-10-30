import * as actionTypes from "../actionTypes";

export const videosSearchStart = (payload) => {
  return {
    type: actionTypes.VIDEOS_SEARCH_START,
    payload,
  };
};

export const videosSearchFinish = (payload) => {
  return {
    type: actionTypes.VIDEOS_SEARCH_FINISH,
    payload,
  };
};

export const videosSearchError = (payload) => {
  return {
    type: actionTypes.VIDEOS_SEARCH_ERROR,
    payload,
  };
};
