import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { px } from "../../helpers/units";
import { ui } from "../../constants/ui";
import { zindex } from "../../constants/zindex";
import { gutters } from "../../constants/gutters";
import { breakpoint } from "../../constants/breakpoints";
import { darken } from "polished";

const darkenPercentage = 0.2;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: ${zindex.header};
  width: 100%;
  height: ${px(ui.headerHeight)};
  background: ${colors.lightGrey};
  border-bottom: 1px solid ${colors.lightGrey};
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoint.phone}) {
    background: ${colors.primary};
    color: ${colors.white};
    position: relative;
    border-bottom: 1px solid ${darken(darkenPercentage, colors.primary)};

    ${({ navActive }) =>
      navActive &&
      css`
        height: 100vh;
      `}
  }
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

  @media (max-width: ${breakpoint.phone}) {
    align-content: unset;
    align-items: unset;
    justify-content: unset;
  }

  a {
    text-align: center;

    @media (max-width: ${breakpoint.phone}) {
      text-align: left;
      padding-left: 10px;
      padding-top: 6px;
    }
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

  a {
    padding: ${px(gutters.twoThirdsGutter)} ${px(gutters.halfGutter)};
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.lightBlack};

    @media (max-width: ${breakpoint.phone}) {
      color: ${colors.white};
    }

    &:hover {
      cursor: pointer;
    }

    &:first-of-type {
      margin-left: ${px(gutters.halfGutter)};
    }
  }

  @media (max-width: ${breakpoint.phone}) {
    display: none;

    ${({ navActive }) =>
      navActive &&
      css`
        display: block;
        position: fixed;
        background: ${colors.primary};
        padding-top: ${px(gutters.doubleGutter)};

        a {
          display: block;
          text-align: center;
        }
      `}
  }
`;

export const StyledPhoneContainer = styled.div`
  height: 100%;
  width: 250px;
  padding-right: ${px(gutters.gutter)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${colors.lightBlack};

  .mobile-only {
    display: none;
  }

  ${({ navActive }) =>
    navActive &&
    css`
      align-content: unset;
      display: block !important;
      top: 20px !important;
    `};

  @media (max-width: ${breakpoint.phone}) {
    span {
      display: none !important;
    }

    .mobile-only {
      display: block;
      color: ${colors.white};
      position: relative;
      z-index: 10000;
      top: 0;
      text-align: right;

      &:focus {
        outline: none;
      }

      ${({ navActive }) =>
        navActive &&
        css`
          top: 26px !important;
        `};
    }
  }
`;
