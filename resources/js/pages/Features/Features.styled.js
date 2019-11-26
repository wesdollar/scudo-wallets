import styled from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";

export const StyledSplitContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${px(gutters.doubleGutter)};
  font-size: 1.5em;

  p {
    line-height: 1.5em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  div {
    width: 45%;
  }
`;
