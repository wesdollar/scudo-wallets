/* eslint-disable no-magic-numbers */
import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { breakpoint } from "../../constants/breakpoints";
import { darken } from "polished";

export const StyledButton = styled.span`
  transition: transform 250ms ease-in-out, color 250ms ease-in-out;
  display: inline-block !important;
  min-width: 200px;
  background: ${({ background }) => background};
  color: ${colors.white};
  text-transform: uppercase;
  border-radius: 50px;
  text-align: center;
  padding: ${px(gutters.halfGutter)} ${px(gutters.gutter)};
  margin-top: ${({ gutterTop }) => px(gutterTop)};

  &:hover {
    cursor: pointer;
    background: ${({ background }) => darken(0.01, background)};
    transform: translate(-1px, 2px);
  }

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      background: transparent;
      color: ${colors.primary};

      &:hover {
        background: transparent;
      }
    `}

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
