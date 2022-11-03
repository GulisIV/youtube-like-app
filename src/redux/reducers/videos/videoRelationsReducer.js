import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../../utils/utils";

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
  errorMessage: "",
};

/**
 * Handler for 'LOAD_RELATED_VIDEOS_START' action
 *
 * @param {Object} state Redux state
 * @returns {Object} Redux state
 */
const loadRelatedVideosStart = (state) => {
  const updater = {
    isLoading: true,
  };

  return updateObject(state, updater);
};

/**
 * Handler for 'LOAD_RELATED_VIDEOS_FINISH' action
 *
 * @param {Object} state Redux state
 * @param {Object} state Redux action
 * @returns {Object} Redux state
 */
const loadRelatedVideosFinish = (state, action) => {
  const updater = {
    isLoading: false,
    isError: false,
    items: action.payload.items,
    errorMessage: "",
  };

  return updateObject(state, updater);
};

/**
 * Handler for 'LOAD_RELATED_VIDEOS_ERROR' action
 *
 * @param {Object} state Redux state
 * @param {Object} state Redux action
 * @returns {Object} Redux state
 */
const loadRelatedVideosError = (state, action) => {
  const updater = {
    isLoading: false,
    isError: true,
    errorMessage: action.payload.errorMessage,
  };

  return updateObject(state, updater);
};

export const videoRelationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_RELATED_VIDEOS_START: {
      return loadRelatedVideosStart(state, action);
    }
    case actionTypes.LOAD_RELATED_VIDEOS_FINISH: {
      return loadRelatedVideosFinish(state, action);
    }
    case actionTypes.LOAD_RELATED_VIDEOS_ERROR: {
      return loadRelatedVideosError(state, action);
    }
    default:
      return state;
  }
};
