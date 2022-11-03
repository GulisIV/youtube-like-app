import React from "react";
import styled from "styled-components";

const ChannelImage = () => {
  return <StyledImg src="https://picsum.photos/200" alt="Your Channel" />;
};

export default ChannelImage;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #aaa;
`;
