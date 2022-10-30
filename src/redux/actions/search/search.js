import * as actionTypes from "../actionTypes";

export const videosSearchInit = (payload) => {
  return {
    type: actionTypes.VIDEOS_SEARCH_INIT,
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
