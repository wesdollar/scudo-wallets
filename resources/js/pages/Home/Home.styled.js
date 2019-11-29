import styled from "styled-components";
import { colors } from "../../constants/colors";
import { breakpoint } from "../../constants/breakpoints";

export const StyledCalloutSection = styled.div`
  background: ${colors.primary};
  color: ${colors.white};
`;

export const StyledHomeContainer = styled.div`
  @media (max-width: ${breakpoint.phone}) {
    #intro-text-container {
      top: 60px !important;
    }

    .split-image-section h1 {
      line-height: 1.2em !important;
    }
  }
`;
