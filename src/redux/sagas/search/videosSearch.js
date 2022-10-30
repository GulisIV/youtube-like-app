import { put, call, takeLatest, all } from "@redux-saga/core/effects";
import * as actionTypes from '../../actions/actionTypes';
import * as YoutubeAPI from '../../../api/YoutubeAPI';
import * as actions from '../../actions/search/search';

function* getSearchedVideos(payload) {
    console.log('payload', payload);
    try {
        const response = yield call(YoutubeAPI.getVideos, payload);
        yield put(actions.videosSearchFinish(response));
    } catch(error) {
        yield put(actions.videosSearchError(error));
    }
}

export function* watchVideosSearch() {
    yield all([
        takeLatest(actionTypes.VIDEOS_SEARCH_INIT, getSearchedVideos),
    ]);
}