import React from "react";
import styled from "styled-components";
import Search from "../Icons/Search";

const YoutubeSearchbar = () => {
  return (
    <SearchbarWrapper>
      <StyledInput type="search" placeholder="Search" aria-label="Search" />
      <SearchButton type="submit">
        <Search />
      </SearchButton>
    </SearchbarWrapper>
  );
};

export default YoutubeSearchbar;

const SearchbarWrapper = styled.form`
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
