import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";

export const StyledButton = styled.span`
  display: inline-block;
  width: 200px;
  background: ${({ background }) => background};
  color: ${colors.white};
  text-transform: uppercase;
  border-radius: 50px;
  text-align: center;
  padding-top: ${px(gutters.halfGutter)};
  padding-bottom: ${px(gutters.halfGutter)};
  margin-top: ${({ gutterTop }) => px(gutterTop)};

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      background: transparent;
      color: ${colors.primary};
    `}

  &:hover {
    cursor: pointer;
  }

  ${({ background }) =>
    background === colors.white &&
    css`
      background: ${background};
      color: ${colors.primary};
    `}
`;
