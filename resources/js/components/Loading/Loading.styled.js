import styled from "styled-components";
import { colors } from "../../constants/colors";
import { ui } from "../../constants/ui";

const half = 2;

export const StyledLoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  vertical-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100000;
  background: ${colors.mediumGrey};
  color: ${colors.primary};

  div {
    position: relative;
    top: -${ui.headerHeight / half}px;
  }
`;
