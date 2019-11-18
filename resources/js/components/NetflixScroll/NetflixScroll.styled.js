/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";
import { colors } from "../../constants/colors";

export const StyledContainer = styled.div`
  width: 100%;
  padding: ${px(gutters.gutter * 2)} ${px(gutters.halfGutter)}
    ${px(gutters.gutter)};
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  background: ${colors.primary};
  color: ${colors.white};

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
