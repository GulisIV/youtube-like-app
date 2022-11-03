import "./App.css";
import { Route, Routes } from "react-router-dom";
import * as routes from "./utils/routes";
import HomePage from "./components/pages/HomePage/HomePage";
import SearchResultsPage from "./components/pages/SearchPage/SearchResultsPage";
import VideoViewPage from "./components/pages/VideoViewPage/VideoViewPage";

function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomePage />} />
      <Route path={routes.SEARCH} element={<SearchResultsPage />} />
      <Route path={routes.VIDEO} element={<VideoViewPage />} />
    </Routes>
  );
}

export default App;
