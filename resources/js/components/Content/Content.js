import React from "react";
import PropTypes from "prop-types";
import { StyledContentContainer } from "./Content.styled";

const Content = ({
  // eslint-disable-next-line react/prop-types
  children,
  alternateBackground,
  textAlign,
  half,
  gutterTop,
  gutterBottom
}) => {
  return (
    <StyledContentContainer
      textAlign={textAlign}
      alternateBackground={alternateBackground}
      half={half}
      gutterTop={gutterTop}
      gutterBottom={gutterBottom}
    >
      {children}
    </StyledContentContainer>
  );
};

Content.propTypes = {
  alternateBackground: PropTypes.bool,
  textAlign: PropTypes.string,
  half: PropTypes.bool,
  gutterTop: PropTypes.number,
  gutterBottom: PropTypes.number
};

Content.defaultProps = {
  alternateBackground: false,
  textAlign: "left",
  half: false,
  gutterTop: 0,
  gutterBottom: 0
};

export default Content;
