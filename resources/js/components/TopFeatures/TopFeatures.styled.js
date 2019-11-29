import styled from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";
import { breakpoint } from "../../constants/breakpoints";

export const StyledFullHeightSection = styled.div`
  min-height: 100vh;
  padding: ${px(gutters.doubleGutter)} 0;
  background: ${colors.white};
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: row wrap;

  .hp-features-row {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    .hp-feature {
      max-width: 35%;
      text-align: center;
    }
  }

  .hp-features-img,
  .hp-features-column {
    width: 20%;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .hp-features-img {
    width: 60%;
  }

  .hp-feature {
    display: inline-block;
    padding: 0 30px;

    h4,
    p {
      margin: 0;
      padding: 0;
    }

    h4 {
      color: ${colors.primary};
      font-size: 1.4em;
      padding-bottom: 6px;
    }
  }

  .hp-features-column {
    &.left {
      position: relative;
      left: 100px;
    }

    &.right {
      position: relative;
      right: 100px;
    }

    .hp-feature {
      margin-bottom: 30px;
    }
  }

  .bottom-features {
    span {
      margin: 30px 15px 0;
    }

    &.hp-features-row {
      justify-content: center;
    }
  }

  .split-content {
    h1 {
      color: ${colors.primary};
    }
  }

  @media (max-width: ${breakpoint.phone}) {
    .hp-features-row,
    .hp-features-column {
      display: block;
    }

    .hp-features-row {
      div {
        margin-bottom: 30px;
      }
    }

    .hp-features-img {
      width: 100% !important;
    }

    .bottom-features {
      text-align: center;
    }

    .hp-feature,
    .hp-features-column {
      width: 100% !important;
      max-width: unset !important;
      text-align: left !important;

      &.left {
        left: 0;
      }

      &.right {
        left: 0;
      }
    }
  }
`;
