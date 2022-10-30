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
const startRecommendedVideosLoad = state => {
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
const finishRecommendedVideosLoad = (state, action) => {
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
 const errorRecommendedVideosLoad = (state, action) => {
    const updater = {
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
    }

    return updateObject(state, updater);
}

export const videoRecommendationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_RECOMMENDED_VIDEOS_START: {
            return startRecommendedVideosLoad(state, action);
        }
        case actionTypes.LOAD_RECOMMENDED_VIDEOS_FINISH: {
            return finishRecommendedVideosLoad(state, action);
        }
        case actionTypes.LOAD_RECOMMENDED_VIDEOS_ERROR: {
            return errorRecommendedVideosLoad(state, action);
        }
        default:
            return state;
    }
};