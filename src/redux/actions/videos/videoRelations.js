import * as actionTypes from "../actionTypes";

export const loadRelatedVideosStart = (payload) => {
  return {
    type: actionTypes.LOAD_RELATED_VIDEOS_START,
    payload,
  };
};

export const loadRelatedVideosFinish = (payload) => {
  return {
    type: actionTypes.LOAD_RELATED_VIDEOS_FINISH,
    payload,
  };
};

export const loadRelatedVideosError = (payload) => {
  return {
    type: actionTypes.LOAD_RELATED_VIDEOS_ERROR,
    payload,
  };
};
