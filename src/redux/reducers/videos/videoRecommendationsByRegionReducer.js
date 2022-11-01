import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../utils/utils';

const initialState = {
    isLoading: false,
    isError: false,
    items: [],
    errorMessage: '',
};

/**
 * Handler for 'LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_START' action
 * 
 * @param {Object} state Redux state
 * @returns {Object} Redux state
 */
const startVideosRecommendationsByRegionLoad = state => {
    const updater = {
        isLoading: true,
    }

    return updateObject(state, updater);
}

/**
 * Handler for 'LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_FINISH' action
 * 
 * @param {Object} state Redux state
 * @param {Object} state Redux action
 * @returns {Object} Redux state
 */
const finishVideosRecommendationsByRegionLoad = (state, action) => {
    const updater = {
        isLoading: false,
        isError: false,
        items: action.payload.items,
        errorMessage: '',
    }

    return updateObject(state, updater);
}

/**
 * Handler for 'LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_ERROR' action
 * 
 * @param {Object} state Redux state
 * @param {Object} state Redux action
 * @returns {Object} Redux state
 */
 const errorVideosRecommendationsByRegionLoad = (state, action) => {
    const updater = {
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
    }

    return updateObject(state, updater);
}

export const videoRecommendationsByRegionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_START: {
            return startVideosRecommendationsByRegionLoad(state, action);
        }
        case actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_FINISH: {
            return finishVideosRecommendationsByRegionLoad(state, action);
        }
        case actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_ERROR: {
            return errorVideosRecommendationsByRegionLoad(state, action);
        }
        default:
            return state;
    }
};
