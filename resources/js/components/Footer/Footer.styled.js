/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";
import { NavLink } from "react-router-dom";
import { fontSize } from "../../constants/fontSizes";

const divBorder = `1px solid ${colors.lightBlack}`;

export const StyledFooterContainer = styled.div`
  background: ${colors.black};
  color: ${colors.white};
  padding: ${px(gutters.gutter)};
  margin: ${px(gutters.doubleGutter)} ${px(gutters.doubleGutter)} 0;

  #footer-logo {
    svg {
      width: 65%;
      height: auto;
    }

    svg * {
      fill: ${colors.white};
    }
  }

  img {
    width: 200px;
    height: auto;
  }

  .flex-container {
    flex-direction: row;

    div {
      flex-grow: 1;

      &:first-of-type {
        width: 0;
      }
    }

    span {
      display: block;
      text-align: right;
    }
  }

  .copyright {
    display: block;
    text-align: center;
    font-size: ${fontSize.small};
    border-top: ${divBorder};
    padding-top: ${px(gutters.gutter)};
    margin-top: ${px(gutters.gutter)};

    span {
      color: ${colors.mediumBlack};
    }
  }

  .social-links {
    text-align: center;
    margin-bottom: ${px(gutters.gutter)};
    padding-bottom: ${px(gutters.gutter)};
    border-bottom: ${divBorder};

    span {
      padding: 0 ${px(gutters.halfGutter)};
      font-size: 1.5em;

      &:hover {
        cursor: pointer;
      }
    }

    p {
      color: ${colors.mediumBlack};
      font-size: ${fontSize.small};
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.white};

  &:hover {
    cursor: pointer;
  }
`;
