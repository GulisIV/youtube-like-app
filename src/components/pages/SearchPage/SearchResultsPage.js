import React from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../common/PageHeader/PageHeader";
import VideosPanel from "../../common/VideosPanel/VideosPanel";
import { searchedVideosSelector } from "../../../redux/selectors/search/searchSelectors";

const SearchResultsPage = () => {
  const searchedVideos = useSelector(searchedVideosSelector);

  return (
    <>
      <PageHeader />
      <VideosPanel videos={searchedVideos} />
    </>
  );
};

export default SearchResultsPage;
