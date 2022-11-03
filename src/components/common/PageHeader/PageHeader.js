import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as routes from "../../../utils/routes";
import { videosSearchInit } from "../../../redux/actions/search/search";
import YoutubeSearchbar from "../YoutubeSearchbar/YoutubeSearchbar";
import ChannelImage from "../ChannelImage/ChannelImage";
import Apps from "../Icons/Apps";
import Bell from "../Icons/Bell";
import Videos from "../Icons/Videos";
import Logo from "../Icons/Logo.png";

const PageHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchAction = (searchedValue) => {
    dispatch(videosSearchInit(searchedValue));
    navigate(generatePath(routes.SEARCH, { query: searchedValue }));
  };
  return (
    <HeaderWrapper>
      <StyledLogo src={Logo} alt="YouTube Logo" />
      <YoutubeSearchbar onSubmit={handleSearchAction} />
      <MenuIcons>
        <Videos />
        <Apps />
        <Bell />
        <ChannelImage />
      </MenuIcons>
    </HeaderWrapper>
  );
};

export default PageHeader;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const MenuIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: 1.5rem;
`;

const StyledLogo = styled.img`
  height: 20px;
`;
