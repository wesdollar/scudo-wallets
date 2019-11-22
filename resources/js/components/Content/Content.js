import React from "react";
import { StyledContentContainer } from "./Content.styled";

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default Content;
