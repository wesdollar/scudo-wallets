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

    @media (max-width: ${breakpoint.phone}) {
      width: 100% !important;
      display: block !important;
    }
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
