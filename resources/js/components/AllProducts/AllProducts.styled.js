import styled from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${px(gutters.gutter)};
  justify-content: center;

  a {
    padding-left: ${px(gutters.halfGutter)};
    padding-right: ${px(gutters.halfGutter)};
    margin-bottom: ${px(gutters.gutter)};
    color: ${colors.black};

    &:hover {
      color: ${colors.mediumBlack};
    }

    img {
      height: 225px;
      width: auto;
    }

    p {
      text-align: center;

      span {
        display: block;
        font-size: 0.75em;
      }
    }
  }
`;
