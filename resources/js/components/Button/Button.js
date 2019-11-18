import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

const Button = ({ handleOnClick, isTransparent, text }) => {
  return (
    <StyledButton isTransparent={isTransparent} onClick={handleOnClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isTransparent: PropTypes.bool
};

Button.defaultProps = {
  handleOnClick: () => {},
  text: "",
  isTransparent: false
};

export default Button;
