import styled from "styled-components";
import { ui } from "../../constants/ui";
import { gutters } from "../../constants/gutters";

const usedHeight =
  // eslint-disable-next-line no-magic-numbers
  ui.productDetailsHeight + ui.headerHeight + gutters.gutter * 2;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background: red;
  height: calc(100vh - ${usedHeight}px);
  //overflow-x: scroll;
  //overflow-y: hidden;
  //white-space: nowrap;
`;

export const StyledScrollImage = styled.div`
  transition: box-shadow 250ms ease-in-out;
  flex: 0 0 auto;
  height: 100%;
  width: 200px;
  background-size: cover;
  box-shadow: inset 0 0 20px 3px rgba(0, 0, 0, 1);

  &:hover {
    box-shadow: none;
    cursor: pointer;
  }
`;
