import styled from "styled-components";
import { StyledContentContainer } from "../../components/Content/Content.styled";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";

export const StyledContent = styled(StyledContentContainer)`
  h1 {
    margin-bottom: ${px(gutters.doubleGutter)};
  }

  h2 {
    margin-top: ${px(gutters.gutter)};
  }

  div {
    margin-bottom: ${px(gutters.doubleGutter)};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
