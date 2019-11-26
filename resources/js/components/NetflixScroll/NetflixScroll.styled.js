/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";
import { colors } from "../../constants/colors";

export const StyledContainer = styled.div`
  background: ${colors.primary};
  color: ${colors.white};
  display: block;
  width: 100%;

  .scroll-buttons {
    display: block;
    text-align: center;
    padding-bottom: ${px(gutters.twoThirdsGutter)};

    svg {
      margin-right: ${px(gutters.smallGutter)};
      font-size: 1.8em;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        cursor: pointer;
      }
    }

    svg * {
      fill: ${colors.white};
    }
  }
`;

export const StyledScrollContainer = styled.div`
  width: 100%;
  padding: ${px(gutters.gutter * 2)} ${px(gutters.halfGutter)} 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  div {
    margin-left: ${px(gutters.halfGutter)};
    margin-right: ${px(gutters.halfGutter)};
    text-align: center;

    &:last-of-type {
      padding-right: 100px;
    }

    span {
      display: block;
      font-size: 0.7em;
    }

    img {
      height: 150px;
      width: auto;
      max-width: none !important;
    }
  }
`;
