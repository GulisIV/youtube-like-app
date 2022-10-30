import { applyMiddleware, combineReducers, compose, configureStore } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import { videoRecommendationsReducer } from "../reducers/videos/videoRecommendationsReducer";
import { videoSuggestionsReducer } from "../reducers/videos/videoSuggestionsReducer";
import { searchReducer } from "../reducers/search/searchReducer";

export const rootReducer = combineReducers({
    videoRecommendations: videoRecommendationsReducer,
    videoSuggestions: videoSuggestionsReducer,
    search: searchReducer,
});
export const store = configureStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);