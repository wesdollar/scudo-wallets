import styled from "styled-components";
import { colors } from "../../constants/colors";
import { px } from "../../helpers/units";
import { ui } from "../../constants/ui";
import { zindex } from "../../constants/zindex";
import { gutters } from "../../constants/gutters";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: ${zindex.header};
  width: 100%;
  height: ${px(ui.headerHeight)};
  background: ${colors.lightGrey};
  border-bottom: 1px solid ${colors.mediumGrey};
  display: flex;
  align-items: center;
`;

export const StyledLogoContainer = styled.div`
  width: 200px;
  height: 100%;
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  a {
    text-align: center;
  }

  svg {
    position: relative;
    top: 5px;
    width: 50%;
    height: auto;
  }

  svg * {
    fill: ${colors.white};
  }
`;

export const StyledNavContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  padding: ${px(gutters.twoThirdsGutter)} ${px(gutters.halfGutter)};
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.primary};

  &:hover {
    cursor: pointer;
  }

  &:first-of-type {
    margin-left: ${px(gutters.halfGutter)};
  }
`;

export const StyledPhoneContainer = styled.div`
  height: 100%;
  width: 250px;
  padding-right: ${px(gutters.gutter)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
