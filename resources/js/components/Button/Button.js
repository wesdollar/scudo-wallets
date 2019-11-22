import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

const Button = ({
  handleOnClick,
  isTransparent,
  text,
  gutterTop,
  background
}) => {
  return (
    <StyledButton
      gutterTop={gutterTop}
      isTransparent={isTransparent}
      onClick={handleOnClick}
      background={background}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isTransparent: PropTypes.bool,
  gutterTop: PropTypes.number,
  background: PropTypes.string
};

Button.defaultProps = {
  handleOnClick: () => {},
  text: "",
  isTransparent: false,
  gutterTop: gutters.gutter,
  background: colors.primary
};

export default Button;
