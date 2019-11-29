import styled, { css } from "styled-components";
import { px } from "../../helpers/units";
import { breakpoint } from "../../constants/breakpoints";

export const StyledText = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  margin-top: ${({ gutterTop }) => px(gutterTop)};
  margin-bottom: ${({ gutterBottom }) => px(gutterBottom)};

  ${({ mobileOnly }) =>
    mobileOnly &&
    css`
      @media (max-width: ${breakpoint.phone}) {
        display: none !important;
      }
    `}
`;
