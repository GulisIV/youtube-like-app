import { put, call, takeLatest, all } from "@redux-saga/core/effects";
import * as actionTypes from "../../actions/actionTypes";
import * as YoutubeAPI from "../../../api/YoutubeAPI";
import * as actions from "../../actions/videos/videoRelations";

/**
 * Worker for "LOAD_RELATED_VIDEOS_START" action
 */
function* getVideoRelations(payload) {
  try {
    const response = yield call(YoutubeAPI.getRelatedVideos, payload);
    yield put(actions.loadRelatedVideosFinish(response));
  } catch (error) {
    yield put(actions.loadRelatedVideosError(error));
  }
}

/**
 * Watcher for getting related videos (video page)
 */
export function* watchVideosRelations() {
  yield all([
    takeLatest(actionTypes.LOAD_RELATED_VIDEOS_START, getVideoRelations),
  ]);
}
