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
const startVideosSearch = state => {
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
const finishVideosSearch = (state, action) => {
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
 const errorVideosSearch = (state, action) => {
    const updater = {
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
    }

    return updateObject(state, updater);
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VIDEOS_SEARCH_START: {
            return startVideosSearch(state, action);
        }
        case actionTypes.VIDEOS_SEARCH_FINISH: {
            return finishVideosSearch(state, action);
        }
        case actionTypes.VIDEOS_SEARCH_ERROR: {
            return errorVideosSearch(state, action);
        }
        default:
            return state;
    }
};