import styled from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

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
