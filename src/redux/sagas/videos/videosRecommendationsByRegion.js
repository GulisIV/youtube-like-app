import { put, call, takeLatest, all } from "@redux-saga/core/effects";
import * as actionTypes from '../../actions/actionTypes';
import * as YoutubeAPI from '../../../api/YoutubeAPI';
import * as actions from '../../actions/videos/videoRecommendationsByRegion';

/**
 * Worker for "LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_START" action
 */
function* getVideosRecommendationsByRegion(payload) {
    try {
        const response = yield call(YoutubeAPI.getVideosRecommendationsByRegion, payload);
        yield put(actions.loadRecommendedVideosByRegionFinish(response));
    } catch(error) {
        yield put(actions.loadRecommendedVideosByRegionError(error));
    }
}

/**
 * Watcher for videos recommendations by region (home page)
 */
export function* watchVideosRecommendationsByRegion() {
    yield all([
        takeLatest(actionTypes.LOAD_VIDEOS_RECOMMENDATIONS_BY_REGION_START, getVideosRecommendationsByRegion),
    ]);
}