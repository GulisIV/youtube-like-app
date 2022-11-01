import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import thunk from "redux-thunk";

import { videoRecommendationsByRegionReducer } from "../reducers/videos/videoRecommendationsByRegionReducer";
import { videoSuggestionsReducer } from "../reducers/videos/videoSuggestionsReducer";
import { searchReducer } from "../reducers/search/searchReducer";

export const sagaMiddleware = createSagaMiddleware();
export const rootReducer = combineReducers({
    videoRecommendationsByRegion: videoRecommendationsByRegionReducer,
    videoSuggestions: videoSuggestionsReducer,
    search: searchReducer,
});
export const store = createStore(rootReducer, compose(applyMiddleware(thunk, sagaMiddleware)));