import React from "react";
import PropTypes from "prop-types";
import { StyledText } from "./Text.styled";

// eslint-disable-next-line react/prop-types
const Text = ({ children, fontSize, gutterTop, gutterBottom, mobileOnly }) => {
  return (
    <StyledText
      fontSize={fontSize}
      gutterTop={gutterTop}
      gutterBottom={gutterBottom}
      mobileOnly={mobileOnly}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  fontSize: PropTypes.string,
  gutterTop: PropTypes.number,
  gutterBottom: PropTypes.number,
  mobileOnly: PropTypes.bool
};

Text.defaultProps = {
  fontSize: "1em",
  gutterTop: 0,
  gutterBottom: 0,
  mobileOnly: false
};

export default Text;
