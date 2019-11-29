import styled from "styled-components";
import { px } from "../helpers/units";
import { ui } from "../constants/ui";
import { breakpoint } from "../constants/breakpoints";

export const StyledPageWrapper = styled.div`
  margin-top: ${px(ui.headerHeight)};

  @media (max-width: ${breakpoint.phone}) {
    margin-top: 0;
  }
`;
