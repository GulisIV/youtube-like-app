import { put, call, takeLatest, all } from "@redux-saga/core/effects";
import * as actionTypes from "../../actions/actionTypes";
import * as YoutubeAPI from "../../../api/YoutubeAPI";
import * as actions from "../../actions/search/search";

/**
 * Worker for "VIDEOS_SEARCH_START" action
 */
function* getSearchedVideos(payload) {
  try {
    const response = yield call(YoutubeAPI.getVideos, payload);
    yield put(actions.videosSearchFinish(response));
  } catch (error) {
    yield put(actions.videosSearchError(error));
  }
}

/**
 * Watcher for videos searching
 */
export function* watchVideosSearch() {
  yield all([takeLatest(actionTypes.VIDEOS_SEARCH_START, getSearchedVideos)]);
}
