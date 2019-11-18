import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";
import { breakpoint } from "../../constants/breakpoints";

export const StyledContainer = styled.div`
  color: ${colors.text.primary};
  display: flex;

  .wrap-type {
    margin-bottom: 20px;
    margin-top: 4px;
  }

  div.product-details {
    width: 67%;
    padding: ${px(gutters.gutter)};
    height: 550px;

    @media (max-width: ${breakpoint.phone}) {
      height: auto;
      width: 100%;
    }
  }

  div.img-container {
    display: flex;
    width: 33%;
  }

  img {
    width: 100%;
    height: auto;

    @media (max-width: ${breakpoint.phone}) {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }

  ${({ wideImage }) =>
    wideImage &&
    css`
      div.product-details {
        height: auto;
      }

      div.img-container {
        display: inline-block;
        width: 100%;
        max-width: 850px;
      }
    `};

  @media (max-width: ${breakpoint.phone}) {
    display: block;
  }
`;

export const StyledHeader2 = styled.h2`
  margin-block-start: 0;
  margin-bottom: 0;
`;

export const StyledProductSelect = styled.div`
  label {
    padding-left: ${px(gutters.halfGutter)};
  }

  span:first-of-type {
    display: inline-block;
    width: 200px;
  }

  input[type="checkbox"] {
    position: relative;
    top: -2px;
  }

  label,
  input {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledDivider = styled.div`
  height: 1px;
  display: block;
  content: " ";
  background: ${colors.mediumGrey};
  margin-top: ${px(gutters.halfGutter)};
  margin-bottom: ${px(gutters.halfGutter)};
`;
