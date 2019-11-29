import styled, { css } from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";
import { breakpoint } from "../../constants/breakpoints";

export const StyledContentContainer = styled.div`
  padding: ${px(gutters.doubleGutter)};
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: ${breakpoint.phone}) {
    padding: ${px(gutters.twoThirdsGutter)};
  }

  h1 {
    color: ${colors.primary};
    margin-top: 0;
  }

  h4 {
    color: ${colors.primary};
    margin-bottom: 0;
  }

  h4 + p {
    margin-top: 0;
  }

  @media (max-width: ${breakpoint.phone}) {
    img {
      max-width: 100%;
      height: auto;
    }

    iframe {
      width: 100%;
    }

    h1 {
      line-height: 1.2em;
    }
  }

  ${({ half }) =>
    half &&
    css`
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      padding-right: 0;
      padding-left: 0;
      padding-bottom: ${({ gutterBottom }) => px(gutterBottom)};
      padding-top: ${({ gutterTop }) => px(gutterTop)};

      &:last-of-type {
        padding-bottom: 0;
      }

      > div {
        width: 50%;
        padding: 0 ${px(gutters.gutter)};

        @media (max-width: ${breakpoint.phone}) {
          width: 100%;
          padding: 0;
        }

        &:first-of-type {
          padding-left: 0;
        }

        &:last-of-type {
          padding-right: 0;
        }
      }
    `}

  ${({ alternateBackground }) =>
    alternateBackground &&
    css`
      background: ${colors.mediumGrey};
      color: ${colors.text.primary};
    `}
`;
