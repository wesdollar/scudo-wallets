import React from "react";
import PropTypes from "prop-types";
import { StyledContentContainer } from "./Content.styled";

// eslint-disable-next-line react/prop-types
const Content = ({ children, alternateBackground }) => {
  return (
    <StyledContentContainer alternateBackground={alternateBackground}>
      {children}
    </StyledContentContainer>
  );
};

Content.propTypes = {
  alternateBackground: PropTypes.bool
};

Content.defaultProps = {
  alternateBackground: false
};

export default Content;
