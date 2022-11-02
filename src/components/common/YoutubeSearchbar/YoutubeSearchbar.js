import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as routes from "../../../utils/routes";
import Search from "../Icons/Search";
import { videosSearchInit } from "../../../redux/actions/search/search";

const YoutubeSearchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedValue = e.target.search?.value;
    dispatch(videosSearchInit(searchedValue));
    navigate(generatePath(routes.SEARCH, { query: searchedValue }));
  };

  return (
    <SearchbarForm onSubmit={handleSubmit}>
      <StyledInput
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
      />
      <SearchButton type="submit">
        <Search />
      </SearchButton>
    </SearchbarForm>
  );
};

export default YoutubeSearchbar;

const SearchbarForm = styled.form`
  display: flex;
  flex-grow: 1;
  margin: 0 2rem 0 4rem;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: inherit;
  padding: 0.4em;
  border: 1px solid #777;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border: 1px solid #777;
  background-color: #f8f8f8;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
