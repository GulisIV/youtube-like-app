import React from "react";
import styled from "styled-components";

const UserAvatar = () => {
  return (
    <StyledImg
      src="https://picsum.photos/200"
      alt="Your Channel"
    />
  );
};

export default UserAvatar;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #aaa;
`;
