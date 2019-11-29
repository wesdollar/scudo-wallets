import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { breakpoint } from "../../constants/breakpoints";

export const StyledButton = styled.span`
  display: inline-block !important;
  min-width: 200px;
  background: ${({ background }) => background};
  color: ${colors.white};
  text-transform: uppercase;
  border-radius: 50px;
  text-align: center;
  padding: ${px(gutters.halfGutter)} ${px(gutters.gutter)};
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
    `};

  @media (max-width: ${breakpoint.phone}) {
    display: inline-block;
    margin: 30px auto;
  }
`;
