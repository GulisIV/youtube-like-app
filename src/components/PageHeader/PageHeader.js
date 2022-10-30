import React from "react";
import styled from "styled-components";
import YoutubeSearchbar from "../YoutubeSearchbar/YoutubeSearchbar";
import UserAvatar from "../UserAvatar/UserAvatar";
import Apps from "../Icons/Apps";
import Bell from "../Icons/Bell";
import Videos from "../Icons/Videos";
import Logo from "../Icons/Logo.png";

const PageHeader = () => {
  return (
    <HeaderWrapper>
      <StyledLogo src={Logo} alt="YouTube Logo" />
      <YoutubeSearchbar />
      <MenuIcons>
        <Videos />
        <Apps />
        <Bell />
        <UserAvatar />
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
