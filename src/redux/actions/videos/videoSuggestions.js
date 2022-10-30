import * as actionTypes from "../actionTypes";

export const loadVideoSuggestionsStart = (payload) => {
  return {
    type: actionTypes.LOAD_VIDEO_SUGGESTIONS_START,
    payload,
  };
};

export const loadVideoSuggestionsFinish = (payload) => {
  return {
    type: actionTypes.LOAD_VIDEO_SUGGESTIONS_FINISH,
    payload,
  };
};

export const loadVideoSuggestionsError = (payload) => {
  return {
    type: actionTypes.LOAD_VIDEO_SUGGESTIONS_ERROR,
    payload,
  };
};
