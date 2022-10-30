import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../utils/utils';

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    errorMessage: '',
};

/**
 * Handler for 'LOAD_RECOMMENDED_VIDEOS_START' action
 * 
 * @param {Object} state Redux state
 * @returns {Object} Redux state
 */
const startVideosSuggestionsLoad = state => {
    const updater = {
        isLoading: true,
    }

    return updateObject(state, updater);
}

/**
 * Handler for 'LOAD_RECOMMENDED_VIDEOS_FINISH' action
 * 
 * @param {Object} state Redux state
 * @param {Object} state Redux action
 * @returns {Object} Redux state
 */
const finishVideosSuggestionsLoad = (state, action) => {
    const updater = {
        isLoading: false,
        isError: false,
        data: action.payload.data,
        errorMessage: '',
    }

    return updateObject(state, updater);
}

/**
 * Handler for 'LOAD_RECOMMENDED_VIDEOS_ERROR' action
 * 
 * @param {Object} state Redux state
 * @param {Object} state Redux action
 * @returns {Object} Redux state
 */
 const errorVideosSuggestionsLoad = (state, action) => {
    const updater = {
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
    }

    return updateObject(state, updater);
}

export const videoSuggestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_VIDEO_SUGGESTIONS_START: {
            return startVideosSuggestionsLoad(state, action);
        }
        case actionTypes.LOAD_VIDEO_SUGGESTIONS_FINISH: {
            return finishVideosSuggestionsLoad(state, action);
        }
        case actionTypes.LOAD_VIDEO_SUGGESTIONS_ERROR: {
            return errorVideosSuggestionsLoad(state, action);
        }
        default:
            return state;
    }
};